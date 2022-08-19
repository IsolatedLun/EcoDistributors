<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	function handleEvent(data: any) {
		dispatch('event', {
			...data
		});
	}

	export let items: any[] = [];
	export let ignoreByIds: number[] = [];
	export let otherProps = {};
	export let _this: any;
	export let fontSize = 400;
	export let fallbackText = 'No items found.';

	const dispatch = createEventDispatcher();
	console.log(items);
</script>

{#if items.length - ignoreByIds.length > 0}
	{#each items as props}
		<!-- If there is no id in the props | OR | there is an id and it's not in the ignore list -->
		{#if !props.id || !(props.id && ignoreByIds.includes(props.id))}
			<svelte:component
				this={_this}
				props={{ ...props, ...otherProps }}
				on:event={(e) => handleEvent(e.detail)}
			/>
		{/if}
	{/each}
{:else}
	<div class="[ grid place-items-center ]">
		<p class={`[ fs-${fontSize} ]`}>{fallbackText}</p>
	</div>
{/if}
