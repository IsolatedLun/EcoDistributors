<script>
	import LinkButton from '../components/Interactibles/Buttons/LinkButton.svelte';
	import FlexyCustom from '../components/Alignment/FlexyCustom.svelte';
	import TypoHeader from '../components/Modules/Typography/TypoHeader.svelte';
	import Card from '../components/Modules/Card/Card.svelte';
	import { page } from '$app/stores';

	const detail = String($page.url.searchParams.get('detail'));
</script>

<div class="[ grid place-items-center ]">
	<FlexyCustom useColumn={true} gap={1}>
		<p class="[ clr-primary-400 fs-800 margiin-block-end-1 ]" aria-hidden="true">:(</p>
		<TypoHeader h={1}>Page not found.</TypoHeader>
		<Card variant="red" cubeClass={{ utilClass: 'padding-1 padding-inline-2' }}>
			{detail}.
		</Card>
	</FlexyCustom>

	<LinkButton cubeClass={{ utilClass: 'margin-block-start-2' }}>Back to home</LinkButton>
</div>
