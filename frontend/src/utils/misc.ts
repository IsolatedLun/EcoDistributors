export function createMqIndicator() {
	const indicator = document.createElement('span');
	indicator.classList.add('state-indicator');
	document.body.appendChild(indicator);

	return indicator;
}
