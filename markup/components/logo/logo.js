window.addEventListener('load', () => {
    const viewbox = {
        portable: '42.18383 0.01611 101.668 83.9854',
        desktop: '0 0 186.644 96.426'
    };
    const svg = document.querySelector('symbol#icon--logo');
    svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
    const mqPortable = window.matchMedia('only screen and (max-width: 1279px)');

    /**
     * Меняет атрибут viewBox
     * в зависимости от ширины экрана
     */
    const matchMedia = () => {
        if (svg) {
            if (mqPortable.matches) {
                svg.setAttribute('viewBox', viewbox.portable);
            } else {
                svg.setAttribute('viewBox', viewbox.desktop);
            }
        }
    };

    matchMedia();

    window.addEventListener('resize', () => {
        matchMedia();
    });
});
