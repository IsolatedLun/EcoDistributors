import { act, render } from '@testing-library/svelte';
import 'jest';
import BoxSelect from './BoxSelect.svelte';
import type { Props_Select } from './types';

interface Test_BoxSelect {
	options: Props_Select[];
}

test('Render a Box select and click the 1st option then 3rd option', async () => {
	const {} = render(BoxSelect, {
		props: {
			options: [
				{ icon: '', text: 'Option1' },
				{ icon: '', text: 'Option2' },
				{ icon: '', text: 'Option3' }
			]
		} as Test_BoxSelect
	});

	const options = document.querySelectorAll('.box-select-button') as NodeListOf<HTMLButtonElement>;

	expect(options[0].getAttribute('data-selected')).toBe('false');

	// Selected 1st option
	await act(() => {
		options[0].click();
	});

	expect(options[0].getAttribute('data-selected')).toBe('true');

	// Selected 3rd option
	await act(() => {
		options[2].click();
	});

	// Lost it's selected state
	expect(options[0].getAttribute('data-selected')).toBe('false');

	// Clicked
	expect(options[2].getAttribute('data-selected')).toBe('true');
});
