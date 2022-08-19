<script lang="ts">
	import { mq } from '../../../../stores/media-queries/mqStore';
	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import LinkButton from '../../../../components/Interactibles/Buttons/LinkButton.svelte';
	import Image from '../../../../components/Misc/MediaElements/Image.svelte';
	import { API_URL } from '../../../../consts';

	export let images: string[] = [];
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
				<Image
					use={(e) => (e.id = `image-${i}`)}
					props={{ src: API_URL + image, alt: productName + 'image' }}
				/>
			</LinkButton>
		{/each}
	</div>
	<div
		class="[ viewer__main-image ] [ place-self-center border-radius-cubed ]"
		data-image-type="default"
	>
		<Image
			cubeClass={{ utilClass: 'object-fit-contain' }}
			props={{ src: API_URL + images[idx], alt: productName + 'image' }}
		/>
	</div>
</FlexyCustom>
