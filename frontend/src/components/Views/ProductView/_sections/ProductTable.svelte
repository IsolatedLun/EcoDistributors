<script lang="ts">
	import { capitalize } from '../../../../utils/misc';
	import type { KeyValue } from '../../../../types';

	export let data: KeyValue<string>[] = [];
</script>

<table class="[ product__table ]">
	<tbody>
		{#each Object.entries(data) as [key, val]}
			{#if key === 'weight'}
				<tr>
					<td>{capitalize(key)}</td>
					<td>{val} pounds</td>
				</tr>
			{:else}
				<tr>
					<td>{capitalize(key)}</td>
					<td>{val}</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
