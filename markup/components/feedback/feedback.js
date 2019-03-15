import noScroll from 'no-scroll';

document.addEventListener('DOMContentLoaded', () => {
    const dialogs = document.querySelectorAll('.modal');
    const form = document.querySelector('form.feedback');

    let dialogSuccess = null;
    let dialogFailure = null;
    let btnSubmit = null;

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
    }

    let isValid = false;

    const btnSubmitHandler = evt => {
        const { target } = evt;
        evt.preventDefault();
        target.setAttribute('disabled', 'disabled');

        isValid = Array.from(form.querySelectorAll('input'))
            .filter(input => input.hasAttribute('required'))
            .every(input => input.validity.valid);

        if (isValid) {
            dialogSuccess.showModal();
            noScroll.on();
        } else {
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

    window.addEventListener('keydown', e => keyboardHandler(e));
});
