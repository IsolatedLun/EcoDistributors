<script>
	import { createMqIndicator } from '../utils/misc';
	import { onMount } from 'svelte';
	import Navbar from '../components/Layouts/Navbar/Navbar.svelte';
	import { mq } from '../stores/media-queries/mqStore';
	import { MQ_UPDATE_INTERVAL } from '../consts';
	import Footer from '../components/Layouts/Footer/Footer.svelte';
	import { cart, getCartOnLocalStorage } from '../stores/cart/cart';
	import axios from 'axios';

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
		cart.set(getCartOnLocalStorage());
	});
</script>

<div class="[ body-wrapper ]">
	<Navbar />

	<main class="[ main-container ] [ gap-2 padding-1 border-radius-cubed margin-block-end-auto ]">
		<slot />
	</main>

	<Footer />
</div>

<style>
	@import url('../../static/posty.css');
</style>
