import type { Props_Attrribute } from './types';

export function createMqIndicator() {
	const indicator = document.createElement('span');
	indicator.classList.add('state-indicator');
	document.body.appendChild(indicator);

	return indicator;
}

/**
 * @param el -> a DOM element
 * @param attrs -> An array of attributes
 */
export function attrSetter(el: HTMLElement, attrs: Props_Attrribute[]) {
	attrs.forEach((attr) => {
		el.setAttribute(attr.name, String(attr.value));
	});
}
