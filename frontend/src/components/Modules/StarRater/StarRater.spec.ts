import { act, render } from '@testing-library/svelte';
import 'jest';
import StarRater from './StarRater.svelte';

test('Render a star rater and rate something 3 stars', async () => {
	const {} = render(StarRater, { props: { canRate: true } });

	const star_3 = document.querySelector('.button[data-star="3"]') as HTMLButtonElement;

	await act(() => {
		star_3.click();
	});

	expect(star_3.getAttribute('data-star-selected')).toBe('true');

	// 1 star is already selected
	expect(document.querySelectorAll('.button[data-star-selected="false"]').length).toBe(4);
});
