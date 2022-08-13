<script lang="ts">
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';

	import { createDefaultProductPreview } from '../../../utils/defaultCreates';
	import StarRater from '../StarRater/StarRater.svelte';

	export let props = createDefaultProductPreview();
	export let dataMode = 'column';
</script>

<div class="[ product ] [ flex gap-2 overflow-hidden border-radius-cubed ]" data-mode={dataMode}>
	<!-- Clamp image size for mobile -->
	<div class="[ product__image ]">
		<img src={props.thumbnail} alt={`${props.title}'s profile`} />
	</div>
	<FlexyCustom
		cubeClass={{ blockClass: 'product__content', utilClass: 'margin-block-1' }}
		useColumn={true}
		align="start"
		justify="space-between"
	>
		<FlexyCustom useColumn={true} align="start" gap={1}>
			<!-- Clamp line -->
			<p class="[ fs-500 ]">{props.title}</p>
			<StarRater />
		</FlexyCustom>
		<p class="[ product__price ]">${props.price}</p>
		<!-- Add related category tags -->
	</FlexyCustom>
</div>
