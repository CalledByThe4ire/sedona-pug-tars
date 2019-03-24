/* eslint-disable */
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
    // let enableMagnific = true;
    const searchBtn = document.querySelector('.search__btn');
    if (searchBtn) {
        $(searchBtn).magnificPopup({
            type: 'inline',
            closeBtnInside: false,
            midClick: true
            // disableOn: () => enableMagnific
        });
    }

    $(window).resize(() => {
        const $mfp = $.magnificPopup.instance;
        if ($mfp && $mfp.isOpen) {
            $mfp.close();
            // enableMagnific = false;
        }
    });
});

