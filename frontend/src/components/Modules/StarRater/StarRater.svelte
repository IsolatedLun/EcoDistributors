<script lang="ts">
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import { STAR_ICON } from '../../../consts';
	import Icon from '../Icon/Icon.svelte';
	import type { Props_StarRater } from './types';
	import { createDefaultStarRater } from '../../../utils/defaultCreates';

	function handleStarRate(e: Event) {
		const target = e.target as HTMLButtonElement;
		const stars = target.parentElement?.querySelectorAll('.button.star');

		stars?.forEach((star) => star.setAttribute('data-star-selected', 'false'));
		target.setAttribute('data-star-selected', 'true');
	}

	export let props: Props_StarRater = createDefaultStarRater();
	export const canRate = true;
</script>

<div class="[ star-rater-container ]" data-star-hoverable={canRate}>
	<FlexyCustom gap={1}>
		<FlexyCustom cubeClass={{ blockClass: 'star-rater', utilClass: 'flex-row-reverse' }} gap={0}>
			{#each { length: 5 } as _, i}
				<Button
					use={(e) => e.setAttribute('data-star', String(5 - i))}
					on:click={canRate ? handleStarRate : () => null}
					cubeClass={{ blockClass: 'star', utilClass: 'ignore-children cursor-pointer padding-1' }}
					variant="none"
				>
					<Icon cubeClass={{ utilClass: 'fs-350' }} ariaLabel="Star Icon">{STAR_ICON}</Icon>
				</Button>
			{/each}
		</FlexyCustom>
		<div class="[ rater__stats ] [ fs-350 ]">
			<p>
				{props.rating} / 5
				<span class="[ fs-300 margin-inline-start-1 ]">({props.reviews} reviews)</span>
			</p>
		</div>
	</FlexyCustom>
</div>
