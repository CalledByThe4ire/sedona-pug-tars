/* eslint-disable import/no-unresolved */
import { setAttributes } from 'static/js/libraries/utils';

document.addEventListener('DOMContentLoaded', () => {
    const togglerMod = {
        close: '--is-closed',
        open: '--is-opened',
        fixed: '--is-fixed'
    };
    const icon = document.querySelector('.js-toggler use');
    const iconMod = { close: 'menu', open: 'cross' };

    /**
     * В зависимости от наличия модификатора
     * у элемента, на котором произведен клик
     * ставит / снимает класс для этого элемента,
     * а также меняет значение атрибута у вложенного элемента
     * @param  {MouseEvent} evt
     */
    const changeTogglerAttrs = evt => {
        const toggle = evt.target;
        if (toggle.classList.contains(`toggler${togglerMod.open}`)) {
            toggle.classList.remove(`toggler${togglerMod.open}`);
            toggle.classList.remove(`toggler${togglerMod.fixed}`);
            toggle.classList.add(`toggler${togglerMod.close}`);
            setAttributes(icon, {
                'xlink:href': `#icon--${iconMod.close}`
            });
        } else if (toggle.classList.contains(`toggler${togglerMod.close}`)) {
            toggle.classList.remove(`toggler${togglerMod.close}`);
            toggle.classList.add(`toggler${togglerMod.open}`);
            toggle.classList.add(`toggler${togglerMod.fixed}`);
            setAttributes(icon, {
                'xlink:href': `#icon--${iconMod.open}`
            });
        }
    };

    document.querySelector('.js-toggler').addEventListener('click', evt => {
        changeTogglerAttrs(evt);
    });
});
