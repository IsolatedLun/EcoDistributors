<script>
	import LinkButton from '../../../components/Interactibles/Buttons/LinkButton.svelte';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../Interactibles/Buttons/Button.svelte';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { BARS_ICON, SUN_ICON, TIMES_ICON, TRUCK_ICON } from '../../../consts';

	let showHamburger = false;
</script>

<FlexyCustom
	tag="navbar"
	justify="space-between"
	cubeClass={{
		blockClass: 'primary-navbar',
		utilClass: 'padding-1 padding-inline-5'
	}}
>
	<h1 class="[ fs-600 fw-normal typography-header-1 ]" data-desktop>
		<a href="/">Eco | Distributors</a>
	</h1>

	<h1 data-mobile>
		<a href="/"
			><Icon cubeClass={{ utilClass: 'fs-800' }} ariaLabel="Truck icon">{TRUCK_ICON}</Icon></a
		>
	</h1>

	<div data-mobile>
		<div class="[ flex align-items-center gap-2 ]">
			<LinkButton>Sign up</LinkButton>
			<Button variant="hoverable" on:click={() => (showHamburger = !showHamburger)}>
				<Icon cubeClass={{ utilClass: 'fs-700' }}>
					{#if showHamburger}
						{TIMES_ICON}
					{:else}
						{BARS_ICON}
					{/if}
				</Icon>
			</Button>
		</div>
	</div>

	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ul
		class="[ navigation__list ] [ flex align-items-center gap-3 fs-450 ]"
		role="list"
		data-desktop
	>
		<li><a href="/">Our store</a></li>
		<li><a href="/">Contact</a></li>
		<li><a href="/">Login</a></li>
		<li class="[ margin-inline-start-3 ]">
			<LinkButton>Sign up</LinkButton>
		</li>
	</ul>
</FlexyCustom>

{#if showHamburger}
	<!-- svelte-ignore a11y-unknown-role -->
	<nav class="[ mobile-navbar ] [ margin-block-1 ]" role="Mobile navigation">
		<!-- svelte-ignore a11y-no-redundant-roles -->
		<FlexyCustom
			use={(e) => e.setAttribute('role', 'list')}
			tag="ul"
			gap={2}
			useColumn
			justify="center"
			cubeClass={{ utilClass: 'fs-450' }}
		>
			<li><a href="/">Our store</a></li>
			<li><a href="/">Contact</a></li>
			<li><a href="/">Login</a></li>
			<li class="[ margin-block-start-1 ]">
				<LinkButton>Sign up</LinkButton>
			</li>
		</FlexyCustom>
	</nav>
{/if}
