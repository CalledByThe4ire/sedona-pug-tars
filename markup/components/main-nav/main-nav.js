document.addEventListener('DOMContentLoaded', () => {
    const mainNavItems = Array.from(
        document.querySelectorAll('.main-nav .list__link')
    );
    const mqMobile = window.matchMedia('only screen and (max-width: 767px)');
    const mqTabDesk = window.matchMedia('only screen and (min-width: 768px)');

    /**
     * Ставит / снимает класс
     * в зависимости от ширины экрана
     */
    const matchMedia = () => {
        if (mqMobile.matches) {
            mainNavItems.forEach(item => {
                if (item.classList.contains('link')) {
                    item.classList.remove('link');
                }
            });
        }
        if (mqTabDesk.matches) {
            mainNavItems.forEach(item => {
                if (!item.classList.contains('link')) {
                    item.classList.add('link');
                }
            });
        }
    };

    matchMedia();

    window.addEventListener('resize', () => {
        matchMedia();
    });
});
