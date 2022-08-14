<script lang="ts">
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import { MINUS_ICON, PLUS_ICON } from '../../../consts';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../Buttons/Button.svelte';

	export let value = 1;
</script>

<FlexyCustom cubeClass={{ utilClass: 'fs-350' }} gap={1}>
	<Button on:click={() => value++} variant="hoverable"
		><Icon cubeClass={{ utilClass: 'fs-300' }} ariaLabel="Increment icon">{PLUS_ICON}</Icon></Button
	>
	<input
		bind:value
		min="1"
		class="[ input ]"
		type="number"
		data-variant="default"
		data-secondary-variant="quantity"
	/>
	<Button on:click={() => (value > 1 ? value-- : null)} variant="hoverable"
		><Icon cubeClass={{ utilClass: 'fs-300' }} ariaLabel="Decrement icon">{MINUS_ICON}</Icon
		></Button
	>
</FlexyCustom>
