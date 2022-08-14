<script lang="ts">
	import { mq } from '../../../../stores/media-queries/mqStore';

	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../../components/Interactibles/Buttons/Button.svelte';

	export let images: string[] = [
		'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
		'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png'
	];
</script>

<FlexyCustom cubeClass={{ blockClass: 'image-viewer' }} align="start">
	<div class={`[ viewer__images ] [ ${$mq.state === 2 ? 'media-scroller ' : ''} ] [ grid gap-1 ]`}>
		{#each images as image}
			<Button variant="none" cubeClass={{ utilClass: 'border-radius-cubed' }}>
				<img class="[ image__view ]" src={image} alt="" />
			</Button>
		{/each}
	</div>
	<div
		class="[ viewer__main-image ] [ place-self-center border-radius-cubed ]"
		data-image-type="default"
	>
		<img class="[ object-fit-contain ]" src={images[0]} alt="" />
	</div>
</FlexyCustom>
