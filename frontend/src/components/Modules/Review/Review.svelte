<script lang="ts">
	import Image from '../../../components/Misc/MediaElements/Image.svelte';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import StarRater from '../StarRater/StarRater.svelte';
	import type { Props_Review } from './types';
	import { createDefaultReview } from '../../../utils/defaultCreates';

	export let props: Props_Review = createDefaultReview();
</script>

<div class="[ review ]">
	<div class="[ review__user ]">
		<div class="[ user__profile ]" />
		<FlexyCustom gap={1}>
			<Image props={{ src: '/static/images/defaultProfile.png', alt: '' }} isProfile={true} />
			<p>{props.user.username}</p>
			<StarRater isReview={true} size={'small'} />
		</FlexyCustom>
	</div>
	<h3 class="[ margin-block-1 ]">{props.title}</h3>
	<p>
		{props.comment}
	</p>
</div>
