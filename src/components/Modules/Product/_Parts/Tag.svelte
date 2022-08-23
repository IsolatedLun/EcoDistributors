<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '../../../../components/Interactibles/Buttons/Button.svelte';

	function handleClick(name: string) {
		dispatch('click', {
			name
		});
	}

	export let name: string;

	const dispatch = createEventDispatcher();
</script>

<Button variant="filter" on:click={() => handleClick(name)}>
	<p class="[ fs-350 ]">{name}</p>
</Button>
