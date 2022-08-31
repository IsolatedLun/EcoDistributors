<script>
	import {
		FACEBOOK_ICON,
		FACEBOOK_URL,
		INSTAGRAM_ICON,
		INSTAGRAM_URL,
		TRUCK_ICON,
		YOUTUBE_ICON,
		YOUTUBE_URL
	} from '../../../consts';
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import Card from '../../../components/Modules/Card/Card.svelte';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import LinkButton from '../../../components/Interactibles/Buttons/LinkButton.svelte';
	import { mq } from '../../../stores/media-queries/mqStore';
</script>

<Card
	variant="dark"
	cubeClass={{
		blockClass: 'primary-footer',
		utilClass: 'margin-block-start-1 padding-block-3 padding-inline-4'
	}}
>
	<FlexyCustom
		align="start"
		justify="space-between"
		justifyOnMobile={true}
		centerOnMobile={true}
		gap={3}
		collapseOnMobile={$mq.state === 2}
	>
		<div class="[ text-center ]">
			<div data-desktop>
				<TypoHeader h={2}>
					<a href="#/">Eco | Distributors</a>
				</TypoHeader>
			</div>

			<div data-mobile>
				<TypoHeader h={2}>
					<a href="#/">
						<Icon cubeClass={{ utilClass: 'fs-800' }} ariaLabel="Truck icon">{TRUCK_ICON}</Icon>
					</a>
				</TypoHeader>
			</div>

			<FlexyCustom>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<ul class="[ flex align-items-center flex-wrap ]" role="list">
					<li>
						<LinkButton target={'_blank'} to={FACEBOOK_URL} variant="hoverable">
							<i class="[ fa-brands fa-facebook ] [ fs-500 ]" aria-hidden="true" />
							<p class="[ visually-hidden ]">Facebook link</p>
						</LinkButton>
					</li>
					<li>
						<LinkButton target={'_blank'} to={INSTAGRAM_URL} variant="hoverable">
							<i class="[ fa-brands fa-instagram ] [ fs-500 ]" aria-hidden="true" />
							<p class="[ visually-hidden ]">Instagram link</p>
						</LinkButton>
					</li>
					<li>
						<LinkButton target={'_blank'} to={YOUTUBE_URL} variant="hoverable">
							<i class="[ fa-brands fa-youtube ] [ fs-500 ]" aria-hidden="true" />
							<p class="[ visually-hidden ]">Youtube link</p>
						</LinkButton>
					</li>
				</ul>

				<address class="[ fs-300 ]">Eco Distrubters &copy; 2022</address>
			</FlexyCustom>
		</div>

		<div>
			<TypoHeader h={3}>Miscellaneous</TypoHeader>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul class="[ flex-direction-column align-items-center gap-1 ]" role="list">
				<li><a class="" href="#/">Our store</a></li>
				<li><a href="#/">Contact</a></li>
			</ul>
		</div>
		<div>
			<TypoHeader h={3}>Categories</TypoHeader>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul class="[ flex-direction-column align-items-center gap-1 ]" role="list">
				<li aria-hidden="true">...</li>
			</ul>
		</div>
	</FlexyCustom>
</Card>
