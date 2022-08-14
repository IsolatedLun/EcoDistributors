<script lang="ts">
	import { mq } from '../../../../stores/media-queries/mqStore';

	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import LinkButton from '../../../../components/Interactibles/Buttons/LinkButton.svelte';

	export let images: string[] = [
		'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
		'https://www.global-esports.news/wp-content/uploads/2022/05/Minecraft-2022-Guide.jpg',
		'https://cdn-products.eneba.com/resized-products/Dbdx7ihzJk48bASi_G0jHEgx2obfGYE_tNyWsjtJ4a4_350x200_3x-0.png',
		'https://cdn.cloudflare.steamstatic.com/steam/apps/1928870/header.jpg?t=1659111277',
		'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
		'https://assets.reedpopcdn.com/Minecraft-Legends-%E2%80%93-Announce-Trailer---Xbox-%26-Bethesda-Games-Showcase-2022-thumbnail-4.jpg/BROK/thumbnail/1600x900/quality/100/Minecraft-Legends-%E2%80%93-Announce-Trailer---Xbox-%26-Bethesda-Games-Showcase-2022-thumbnail-4.jpg'
	];

	export let productName = '';

	let idx = 0;
</script>

<FlexyCustom
	cubeClass={{ blockClass: 'image-viewer', utilClass: 'place-self-start margin-inline-auto' }}
	align="start"
>
	<div
		class={`[ viewer__images ] [ ${
			$mq.state === 2 ? 'media-scroller ' : 'flex-direction-column'
		} ] [ gap-2 padding-2 ]`}
	>
		{#each images as image, i}
			<LinkButton
				on:click={() => (idx = i)}
				to={`#image-${i}`}
				variant="none"
				cubeClass={{ compostClass: 'image__view', utilClass: 'border-radius-cubed' }}
			>
				<img id={`image-${i}`} src={image} alt={productName + 'image'} />
			</LinkButton>
		{/each}
	</div>
	<div
		class="[ viewer__main-image ] [ place-self-center border-radius-cubed ]"
		data-image-type="default"
	>
		<img class="[ object-fit-contain ]" src={images[idx]} alt="" />
	</div>
</FlexyCustom>
