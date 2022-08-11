<script>
	import BoxSelect from '../components/Interactibles/Selects/BoxSelect.svelte';
	import TextInput from '../components/Interactibles/Inputs/TextInput.svelte';
	import { HOT_ICON, LATEST_ICON, TOP_ICON, UPCOMING_ICON } from '../consts';
</script>

<section class="[ secondary-container ] [ margin-block-start-4 ]">
	<TextInput
		secondaryVariant="use-shadow"
		variant="mega"
		placeholder="Search 24,563,123 products"
	/>

	<div class="[ grid ] [ place-items-center ]">
		<BoxSelect
			cubeClass={{ utilClass: 'margin-block-3' }}
			options={[
				{ text: 'Top', icon: TOP_ICON },
				{ text: 'Latest', icon: LATEST_ICON },
				{ text: 'Hot', icon: HOT_ICON },
				{ text: 'Upcoming', icon: UPCOMING_ICON }
			]}
		/>
	</div>
</section>

<main class="[ main-container ]" />
