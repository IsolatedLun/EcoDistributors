<script>
	import LinkButton from '../../components/Interactibles/Buttons/LinkButton.svelte';
	import FlexyCustom from '../../components/Alignment/FlexyCustom.svelte';
	import Button from '../Interactibles/Buttons/Button.svelte';
	import Icon from '../Modules/Icon/Icon.svelte';
	import { SUN_ICON } from '../../consts';
</script>

<FlexyCustom
	tag="navbar"
	justify="space-between"
	cubeClass={{
		blockClass: 'primary-navbar',
		utilClass: 'padding-1 padding-inline-5'
	}}
>
	<h1 class="[ fs-600 fw-normal typography-header-1 ]">Eco | Distributors</h1>

	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ul
		class="[ navigation__list ] [ flex align-items-center gap-3 fs-450 ]"
		role="list"
		data-desktop
	>
		<li><a href="/">Blog</a></li>
		<li><a href="/">Contact</a></li>
		<li><a href="/">Login</a></li>
		<li class="[ margin-inline-start-3 ]">
			<LinkButton>Sign up</LinkButton>
		</li>
	</ul>
</FlexyCustom>
