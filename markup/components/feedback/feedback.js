import noScroll from 'no-scroll';

document.addEventListener('DOMContentLoaded', () => {
    const dialogSuccess = document.querySelector('.modal--success');
    const dialogFailure = document.querySelector('.modal--failure');

    const btnHandler = evt => {
        const { target } = evt;
        evt.preventDefault();
        target.setAttribute('disabled', 'disabled');

        const isValid = Array.from(
            document.querySelectorAll('form.feedback input')
        )
            .filter(input => input.hasAttribute('required'))
            .every(input => input.checkValidity());

        if (isValid) {
            dialogSuccess.showModal();
            noScroll.on();
        }

        dialogFailure.showModal();
        noScroll.on();
    };

    document
        .querySelector('.feedback__btn')
        .addEventListener('click', e => btnHandler(e));
});
