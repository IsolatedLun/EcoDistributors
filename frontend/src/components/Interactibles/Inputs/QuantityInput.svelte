<script lang="ts">
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import { MINUS_ICON, PLUS_ICON } from '../../../consts';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../Buttons/Button.svelte';

	export let label: string;
	export let value = 1;
	export let id = 'window.crypto.randomUUID()';

	let _this: HTMLInputElement;
</script>

<FlexyCustom cubeClass={{ utilClass: 'fs-350' }} gap={1}>
	<label for={id} class="[ sr-only ]">{label}</label>

	<Button on:click={() => value++} variant="hoverable"
		><Icon cubeClass={{ utilClass: 'fs-300' }} ariaLabel="Increment icon">{PLUS_ICON}</Icon></Button
	>
	<input
		bind:this={_this}
		bind:value
		on:change={() => (value < 0 ? (value = 1) : null)}
		{id}
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
