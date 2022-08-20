<script lang="ts">
	import { page } from '$app/stores';
	import ProductView from '../../components/Views/ProductView/ProductView.svelte';

	let [id, name] = $page.params.data.split('/');
</script>

<svelte:head>
	<title>Eco | {name}</title>
</svelte:head>

<ProductView id={Number(id)} {name} />
