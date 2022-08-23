<script lang="ts">
	import { mq } from '../../../../stores/media-queries/mqStore';
	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import Image from '../../../../components/Misc/MediaElements/Image.svelte';
	import { API_URL } from '../../../../consts';
	import Button from '../../../../components/Interactibles/Buttons/Button.svelte';

	export let images: string[] = [];
	export let productName = '';

	let idx = 0;
</script>

<FlexyCustom
	cubeClass={{
		blockClass: 'image-viewer',
		utilClass: 'place-self-start margin-inline-auto width-100'
	}}
	align="start"
>
	<div
		class={`[ viewer__images ] [ ${
			$mq.state === 2 ? 'media-scroller ' : 'flex-direction-column'
		} ] [ gap-2 padding-2 ]`}
	>
		{#each images as image, i}
			<Button
				on:click={() => (idx = i)}
				use={(e) => e.setAttribute('data-target', 'true')}
				variant="none"
				cubeClass={{
					compostClass: 'image__view',
					utilClass: 'ignore-children border-radius-cubed cursor-pointer'
				}}
			>
				<Image
					use={(e) => (e.id = `image-${i}`)}
					props={{ src: API_URL + image, alt: productName + 'image' }}
				/>
			</Button>
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
