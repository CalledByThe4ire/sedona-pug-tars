import noScroll from 'no-scroll';

document.addEventListener('DOMContentLoaded', () => {
    const dialogs = document.querySelectorAll('.modal');
    const form = document.querySelector('form.feedback');

    let dialogSuccess = null;
    let dialogFailure = null;
    let btnSubmit = null;
    let requiredInputs = null;

    if (dialogs) {
        dialogs.forEach(dialog => {
            if (dialog.classList.contains('modal--success')) {
                dialogSuccess = dialog;
            } else if (dialog.classList.contains('modal--failure')) {
                dialogFailure = dialog;
            }
        });
    }

    if (form) {
        btnSubmit = form.querySelector('.feedback__btn');
        requiredInputs = form.querySelectorAll('input[required]');
    }

    let isValid = false;

    const btnSubmitHandler = evt => {
        const { target } = evt;
        evt.preventDefault();
        target.setAttribute('disabled', 'disabled');

        isValid = Array.from(requiredInputs).every(
            input => input.validity.valid
        );

        if (isValid) {
            dialogSuccess.showModal();
            noScroll.on();
        } else {
            Array.from(requiredInputs).forEach(input => {
                const pattern = new RegExp(input.getAttribute('pattern'));
                const isInputCorrect = pattern.test(input.value);

                if (!isInputCorrect) {
                    input.classList.add('text-input__input--invalid');
                }
            });
            dialogFailure.showModal();
            noScroll.on();
        }
    };

    const btnModalHandler = evt => {
        evt.preventDefault();
        btnSubmit.removeAttribute('disabled');

        if (isValid) {
            dialogSuccess.close();
            noScroll.off();
            form.submit();
        }
        dialogFailure.close();
        noScroll.off();
    };

    const requiredInputHandler = evt => {
        const { target } = evt;
        if (target.classList.contains('text-input__input--invalid')) {
            target.classList.remove('text-input__input--invalid');
        }
    };

    const keyboardHandler = evt => {
        const { keyCode } = evt;

        if (
            (dialogSuccess && dialogSuccess.open) ||
            (dialogFailure && dialogFailure.open)
        ) {
            // Key code for ESC key
            if (keyCode === 27) {
                evt.preventDefault();
            }
        }
    };

    if (btnSubmit) {
        btnSubmit.addEventListener('click', e => btnSubmitHandler(e));
    }

    if (dialogs) {
        dialogs.forEach(element =>
            element.addEventListener('click', e => btnModalHandler(e))
        );
    }

    if (requiredInputs) {
        Array.from(requiredInputs).forEach(input =>
            input.addEventListener('input', e => requiredInputHandler(e))
        );
    }

    window.addEventListener('keydown', e => keyboardHandler(e));
});
