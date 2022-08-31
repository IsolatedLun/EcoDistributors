<script lang="ts">
	import Image from '../../../components/Misc/MediaElements/Image.svelte';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import { createDefaultProductPreview } from '../../../utils/defaultCreates';
	import Card from '../Card/Card.svelte';
	import StarRater from '../StarRater/StarRater.svelte';
	import Typography from '../Typography/Typography.svelte';
	import Tag from './_Parts/Tag.svelte';
	import { createEventDispatcher } from 'svelte';
	import { API_URL } from '../../../consts';
	import { combineCubeClasses, createDefaultCubeClass } from '../../../utils/cubeCssUtils';

	function handleTagClick(name: string) {
		dispatch('event', {
			name
		});
	}

	export let props = createDefaultProductPreview();
	export let cubeClass = createDefaultCubeClass();

	let _cubeClass = {
		blockClass: 'product',
		compostClass: '',
		utilClass: 'flex overflow-hidden'
	};

	const dispatch = createEventDispatcher();
</script>

<Card cubeClass={combineCubeClasses(_cubeClass, cubeClass)}>
	<div class="[ product__image ]">
		<Image props={{ src: props.thumbnail, alt: `${props.title}'s profile` }} />
	</div>
	<FlexyCustom
		cubeClass={{ blockClass: 'product__content', utilClass: 'padding-2 width-100 height-100' }}
		useColumn={true}
		align="start"
		justify="space-between"
	>
		<FlexyCustom
			useColumn={true}
			align="start"
			gap={1}
			cubeClass={{ blockClass: 'content__wrapper', utilClass: 'width-100' }}
		>
			<a
				rel="external"
				href={`#/products/${props.id}/${props.title}`}
				class="[ text-ellipsis-2 ] [ fs-500 ]">{props.title}</a
			>
			<StarRater />

			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul role="list" class="[ tags ] [ flex gap-1 flex-wrap margin-block-start-1 ]">
				{#each props.tags as tag}
					<li>
						<Tag on:click={(e) => handleTagClick(e.detail.name)} name={tag} />
					</li>
				{/each}
			</ul>
		</FlexyCustom>
		<Typography
			fontSize={450}
			fontWeight={'500'}
			cubeClass={{ utilClass: 'margin-block-start-auto' }}>${props.price}</Typography
		>
	</FlexyCustom>
</Card>
