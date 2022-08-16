<script>
	import { mq } from '../../../stores/media-queries/mqStore';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import ProductImageViewer from './_sections/ProductImageViewer.svelte';
	import { createDefaultProduct } from '../../../utils/defaultCreates';
	import QuantityInput from '../../../components/Interactibles/Inputs/QuantityInput.svelte';
	import StarRater from '../../../components/Modules/StarRater/StarRater.svelte';
	import ProductTable from './_sections/ProductTable.svelte';
	import Review from '../../../components/Modules/Review/Review.svelte';
	import Card from '../../../components/Modules/Card/Card.svelte';
	import Typography from '../../../components/Modules/Typography/Typography.svelte';
	import ComponentMap from '../../../components/Misc/ComponentMap.svelte';
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';

	export let props = createDefaultProduct();

	let quantity = 1;
</script>

<div class="[ product-view ] [ width-100 ]">
	<header class="[ view__header ] [ grid gap-1 ]" data-grid-collapse>
		<ProductImageViewer />
		<FlexyCustom
			cubeClass={{
				blockClass: 'products__content',
				compostClass: 'card',
				utilClass: `padding-2 ${$mq.state === 2 ? 'margin-block-start-2' : ''} 
					border-radius-cubed`
			}}
			align="start"
			useColumn={true}
			tag="section"
			justify="space-between"
		>
			<FlexyCustom
				useColumn={true}
				centerOnMobile={true}
				align="start"
				gap={1}
				cubeClass={{ utilClass: 'width-100' }}
			>
				<TypoHeader h={2} spacing={0}>Playstation 5</TypoHeader>
				<StarRater />
			</FlexyCustom>
			<section class={`[ margin-block-1 ] [ ${$mq.state === 2 && 'text-center'} ]`}>
				<TypoHeader h={3}>About this product</TypoHeader>
				<article>
					{props.description}
				</article>
			</section>
			<FlexyCustom
				centerOnMobile={true}
				useColumn={true}
				align="start"
				cubeClass={{ utilClass: 'width-100' }}
			>
				<FlexyCustom gap={1} useColumn={true}>
					<p>
						<output class="[ fs-450 fw-bold margin-inline-1 ]">
							${(props.price * quantity).toFixed(2)}
						</output>
						x {quantity}
					</p>
					<QuantityInput bind:value={quantity} />
				</FlexyCustom>
				<Button cubeClass={{ utilClass: 'width-100' }}>Add to cart</Button>
			</FlexyCustom>
		</FlexyCustom>
	</header>

	<section class="[ margin-block-2 ] [ under-border ]">
		<TypoHeader h={2}>More about this product</TypoHeader>
		<div class="[ grid-repeater-2 ] [ place-items-start gap-2 ]" data-grid-collapse>
			<ProductTable />
			<FlexyCustom useColumn={true} cubeClass={{ utilClass: 'margin-inline-start-2' }}>
				{#each props.about_list as about}
					<li><Typography centerOnMobile={true}>{about}</Typography></li>
				{/each}
			</FlexyCustom>
		</div>
	</section>

	<div class="[ grid-repeater-2 gap-3 ]" data-grid-collapse-center>
		<section>
			<TypoHeader h={2}>Customer reviews</TypoHeader>
			<ComponentMap _this={Review} items={[]} fallbackText={'No reviews found!'} />
		</section>
		<section>
			<TypoHeader h={2}>Related products</TypoHeader>
			<ComponentMap _this={Review} items={[]} fallbackText={'No products found!'} />
		</section>
	</div>
</div>
