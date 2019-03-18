document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const toggler = document.querySelector('.toggler');

    const mqMobile = window.matchMedia('only screen and (max-width: 767px)');
    const mqTabDesk = window.matchMedia('only screen and (min-width: 768px)');

    /**
     * Ставит / снимает класс
     * в зависимости от ширины экрана
     */
    const matchMedia = () => {
        if (mqMobile.matches) {
            if (!page.classList.contains('page--dropdown')) {
                page.classList.add('page--dropdown');
            }
        }
        if (mqTabDesk.matches) {
            if (page.classList.contains('page--dropdown')) {
                page.classList.remove('page--dropdown');
            }
        }
    };

    matchMedia();

    window.addEventListener('resize', () => {
        matchMedia();
    });

    /**
     * Ставит / снимает класс в зависимости от
     * наличия модификатора у элемента ,на котором
     * произведен клик
     * @param  {MouseEvent} evt
     */
    const dropdownHandler = evt => {
        const { target } = evt;
        evt.preventDefault();

        if (target.classList.contains('toggler--is-opened')) {
            page.classList.toggle(
                'page--dropdown',
                page.classList.contains('page--dropdown')
            );
        }
    };

    toggler.addEventListener('click', evt => dropdownHandler(evt));
});
