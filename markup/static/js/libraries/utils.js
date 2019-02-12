/* eslint-disable import/prefer-default-export */
/**
 * Устанавливает атрибуты и их значения из attrs
 * для элемента el
 * @param  {HTMLElement} el
 * @param  {Object} attrs
 */
export const setAttributes = (el, attrs) => {
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
};
