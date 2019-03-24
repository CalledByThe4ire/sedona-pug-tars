/* eslint-disable */
import $ from 'jquery';

$(document).ready(() => {
    // let enableMagnific = true;
    const $searchBtn = $('.search__btn');
    $searchBtn.magnificPopup({
        type: 'inline',
        closeBtnInside: false,
        midClick: true
        // disableOn: () => enableMagnific
    });

    $(window).resize(() => {
        const $mfp = $.magnificPopup.instance;
        if ($mfp.isOpen) {
            $mfp.close();
            // enableMagnific = false;
        }
    });
});
