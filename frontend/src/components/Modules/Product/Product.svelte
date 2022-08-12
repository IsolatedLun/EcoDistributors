<script lang="ts">
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';

	import { createDefaultProductPreview } from '../../../utils/defaultCreates';

	export let props = createDefaultProductPreview();
	export let dataMode = 'column';
</script>

<div class="[ product ] [ flex gap-2 overflow-hidden border-radius-cubed ]" data-mode={dataMode}>
	<div class="[ product__image ]">
		<img src={props.thumbnail} alt={`${props.title}'s profile`} />
	</div>
	<FlexyCustom
		cubeClass={{ blockClass: 'product__content', utilClass: 'margin-block-1' }}
		useColumn={true}
		align="start"
		justify="space-between"
	>
		<p class="[ fs-500 ]">{props.title}</p>
		<p class="[ product__price ]">${props.price}</p>
	</FlexyCustom>
</div>
