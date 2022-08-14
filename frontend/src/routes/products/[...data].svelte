<script lang="ts">
	import { page } from '$app/stores';
	import ProductView from '../../components/Views/ProductView/ProductView.svelte';

	let id = Number($page.params.data.split('/')[0]);
</script>

<ProductView />
