/* eslint-disable no-undef, no-unused-vars */
import $ from 'jquery';

const $mfp = $.magnificPopup.instance;

/**
 * Инициализирует карту
 */
const init = () => {
    let myMap;
    const map = document.querySelector('.map');
    const searchBtn = document.querySelector('.search__btn');

    /**
     * Создает карту
     */
    const createMap = evt => {
        evt.stopPropagation();

        if (!myMap) {
            myMap = new ymaps.Map(map, {
                center: [map.dataset.latitude, map.dataset.longitude],
                zoom: [8],
                controls: []
            });

            const myPlacemark = new ymaps.Placemark(
                myMap.getCenter(),
                {
                    hintContent:
                        'Седона, Коконино-Каунти, штат Аризона, Соединённые Штаты Америки'
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: './static/img/assets/map/map__marker.svg',
                    iconImageSize: [30, 30],
                    iconImageOffset: [-15, -15]
                }
            );
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.add('zoomControl');
            myMap.geoObjects.add(myPlacemark);
        }
    };

    /**
     * Уничтожает карту, если popup не активен
     */
    const destroyMap = evt => {
        if (myMap && !$mfp.isOpen) {
            myMap.destroy();
            myMap = null;
        }
    };

    if (searchBtn) {
        searchBtn.addEventListener('click', evt => createMap(evt));
    }

    document.addEventListener('click', evt => destroyMap(evt));
    window.addEventListener('resize', evt => destroyMap(evt));
};

if (typeof ymaps === 'object') {
    ymaps.ready(init);
}
