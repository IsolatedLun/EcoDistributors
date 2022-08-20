import type { Props_Attrribute } from './types';

export function createMqIndicator() {
	let indicator;
	if (!document.querySelector('.state-indicator')) {
		indicator = document.createElement('span');
		indicator.classList.add('state-indicator');
		document.body.appendChild(indicator);
	} else {
		indicator = document.querySelector('.state-indicator')!;
	}

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

// ===========================
// ===========================
export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
