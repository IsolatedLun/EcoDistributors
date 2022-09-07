<script lang="ts">
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import { STAR_ICON } from '../../../consts';
	import Icon from '../Icon/Icon.svelte';
	import type { Props_StarRater } from './types';
	import { createDefaultStarRater } from '../../../utils/defaultCreates';
	import { createEventDispatcher } from 'svelte';

	function handleStarRate(e: Event, i: number) {
		const target = e.target as HTMLButtonElement;
		const stars = target.parentElement?.querySelectorAll('.button.star');

		stars?.forEach((star) => star.setAttribute('data-star-selected', 'false'));
		target.setAttribute('data-star-selected', 'true');

		dispatch('rate', {
			value: i
		});
	}

	export let props: Props_StarRater = createDefaultStarRater();
	export let canRate = false;
	export let isReview = false;
	export let size: 'big' | 'small' = 'big';

	let dispatch = createEventDispatcher();
</script>

<div class="[ star-rater-container ]" data-star-hoverable={canRate}>
	<FlexyCustom cubeClass={{ blockClass: 'container__wrapper' }} gap={1}>
		<FlexyCustom cubeClass={{ blockClass: 'star-rater', utilClass: 'flex-row-reverse' }} gap={0}>
			{#each { length: 5 } as _, i}
				<Button
					use={(e) => e.setAttribute('data-star', String(5 - i))}
					on:click={(e) => (canRate ? handleStarRate(e, 5 - i) : () => null)}
					cubeClass={{ blockClass: 'star', utilClass: 'ignore-children cursor-pointer padding-1' }}
					variant="none"
				>
					<Icon
						cubeClass={{ utilClass: size === 'big' ? 'fs-350' : 'fs-300' }}
						ariaLabel="Star Icon">{STAR_ICON}</Icon
					>
				</Button>
			{/each}
		</FlexyCustom>
		<div class="[ rater__stats ] [ fs-350 ]">
			<p>
				{props.rating} / 5
				{#if !isReview}
					<span class="[ fs-300 margin-inline-start-1 ]">({props.reviews} reviews)</span>
				{/if}
			</p>
		</div>
	</FlexyCustom>
</div>
