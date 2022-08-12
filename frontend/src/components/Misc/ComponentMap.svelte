<script lang="ts">
	export let items: any[] = [];
	export let otherProps = {};
	export let _this: any;
	export let fontSize = 400;
	export let fallbackText = 'No items found.';
</script>

{#if items.length > 0}
	{#each items as props}
		<svelte:component this={_this} props={{ ...props, ...otherProps }} />
	{/each}
{:else}
	<div class="[ grid place-items-center ]">
		<p class={`[ fs-${fontSize} ]`}>{fallbackText}</p>
	</div>
{/if}
