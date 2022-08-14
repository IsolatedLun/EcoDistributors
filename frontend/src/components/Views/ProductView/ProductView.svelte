<script>
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import ProductImageViewer from './_sections/ProductImageViewer.svelte';
</script>

<div class="[ product-view ]">
	<header class="[ view__header ] [ grid gap-1 ]" data-grid-collapse>
		<ProductImageViewer />
		<FlexyCustom
			cubeClass={{
				blockClass: 'products__content',
				compostClass: 'card',
				utilClass: 'padding-2 border-radius-cubed'
			}}
			align="start"
			useColumn={true}
			justify="space-between"
		>
			<h2>Playstation 5</h2>
			<FlexyCustom useColumn={true} align="start" cubeClass={{ utilClass: 'width-100' }}>
				<p>QUANTITY</p>
				<Button cubeClass={{ utilClass: 'width-100' }}>Add to cart</Button>
			</FlexyCustom>
		</FlexyCustom>
	</header>
</div>
