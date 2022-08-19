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

	function handleTagClick(name: string) {
		dispatch('event', {
			name
		});
	}

	export let props = createDefaultProductPreview();

	const dispatch = createEventDispatcher();
</script>

<Card
	cubeClass={{
		blockClass: 'product',
		utilClass: 'flex overflow-hidden'
	}}
>
	<div class="[ product__image ]">
		<Image props={{ src: API_URL + props.thumbnail, alt: `${props.title}'s profile` }} />
	</div>
	<FlexyCustom
		cubeClass={{ blockClass: 'product__content', utilClass: 'padding-2 width-100' }}
		useColumn={true}
		align="start"
		justify="space-between"
	>
		<FlexyCustom useColumn={true} align="start" gap={1}>
			<a
				target="_self"
				href={`/products/${props.id}/${props.title}?id=${props.id}`}
				class="[ text-ellipsis-2 ] [ fs-500 ]">{props.title}</a
			>
			<StarRater />

			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul role="list" class="[ tags ] [ flex gap-1 flex-wrap ]">
				{#each props.tags as tag}
					<li>
						<Tag on:click={(e) => handleTagClick(e.detail.name)} name={tag} />
					</li>
				{/each}
			</ul>
		</FlexyCustom>
		<Typography fontSize={450} fontWeight={'500'}>${props.price}</Typography>
	</FlexyCustom>
</Card>
