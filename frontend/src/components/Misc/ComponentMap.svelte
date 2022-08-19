<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	function handleEvent(data: any) {
		dispatch('event', {
			...data
		});
	}

	export let items: any[] = [];
	export let otherProps = {};
	export let _this: any;
	export let fontSize = 400;
	export let fallbackText = 'No items found.';

	const dispatch = createEventDispatcher();
</script>

{#if items.length > 0}
	{#each items as props}
		<svelte:component
			this={_this}
			props={{ ...props, ...otherProps }}
			on:event={(e) => handleEvent(e.detail)}
		/>
	{/each}
{:else}
	<div class="[ grid place-items-center ]">
		<p class={`[ fs-${fontSize} ]`}>{fallbackText}</p>
	</div>
{/if}
