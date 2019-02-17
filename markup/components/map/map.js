/* eslint-disable no-undef */

const init = () => {
    const map = document.querySelector('.js-map');
    const myMap = new ymaps.Map(map, {
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
            iconImageHref: '../static/img/assets/map/map__marker.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }
    );
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');
    myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init);
