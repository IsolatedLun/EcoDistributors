<script lang="ts">
	import FlexyCustom from '../../../Alignment/FlexyCustom.svelte';
	import Button from '../../../Interactibles/Buttons/Button.svelte';
	import TextInput from '../../../Interactibles/Inputs/TextInput.svelte';
	import Card from '../../../Modules/Card/Card.svelte';
	import Review from '../../../Modules/Review/Review.svelte';
	import StarRater from '../../../Modules/StarRater/StarRater.svelte';

	export let showReview = false;
	export let hasReviewed = false; // temporary WIP
</script>

<Card cubeClass={{ utilClass: 'padding-block-1 padding-inline-2 margin-block-end-3' }}>
	<FlexyCustom justify="space-between">
		<h2>Your review</h2>
		<Button on:click={() => (showReview = !showReview)}>
			{#if showReview}
				Close
			{:else}
				Open
			{/if}
		</Button>
	</FlexyCustom>
	{#if showReview}
		{#if hasReviewed}
			<Review />
		{:else}
			<FlexyCustom useColumn={true} align="start" cubeClass={{ utilClass: 'padding-1' }}>
				<TextInput
					cubeClass={{ utilClass: 'width-100' }}
					label={'Title'}
					placeholder={'Enter review title'}
					showLabel={true}
				/>
				<TextInput
					cubeClass={{ utilClass: 'width-100' }}
					label={'Description'}
					placeholder={'Enter review'}
					showLabel={true}
				/>
				<StarRater isReview={true} canRate={true} />
				<Button>Add review</Button>
			</FlexyCustom>
		{/if}
	{/if}
</Card>
