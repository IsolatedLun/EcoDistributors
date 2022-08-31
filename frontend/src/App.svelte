<script>
	import Footer from "./components/Layouts/Footer/Footer.svelte";
	import Navbar from "./components/Layouts/Navbar/Navbar.svelte";
	import { createMqIndicator } from './utils/misc';
	import { onMount } from 'svelte';
	import { mq } from './stores/media-queries/mqStore';
	import { MQ_UPDATE_INTERVAL } from './consts';
	import axios from 'axios';
	import NotFound from "./routes/NotFound.svelte";
	import _Home from "./routes/_Home.svelte";
	import Router from 'svelte-spa-router';

	onMount(() => {
		axios.defaults.xsrfCookieName = 'csrftoken';
		axios.defaults.xsrfHeaderName = 'X-CSRFToken';

		function updateMq() {
			const index = parseInt(
				window.getComputedStyle(createMqIndicator()).getPropertyValue('z-index')
			);

			if (index) mq.set({ ...mq, state: index });
			setTimeout(updateMq, MQ_UPDATE_INTERVAL);
		}

		updateMq();
	});

	let routes = {
		'/': _Home,
		'*': NotFound,
	}
</script>
<svelte:head>
	<title>Eco Distributors | Home</title>
</svelte:head>


<div class="[ body-wrapper ]">
	<Navbar />

	<main class="[ main-container ] [ gap-2 padding-1 border-radius-cubed margin-block-end-auto ]">
		<Router routes={routes} />
	</main>

	<Footer />
</div>