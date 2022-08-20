<script>
	import { createMqIndicator } from '../utils/misc';
	import { onMount } from 'svelte';
	import Navbar from '../components/Layouts/Navbar/Navbar.svelte';
	import { mq } from '../stores/media-queries/mqStore';
	import { MQ_UPDATE_INTERVAL } from '../consts';

	onMount(() => {
		function updateMq() {
			const index = parseInt(
				window.getComputedStyle(createMqIndicator()).getPropertyValue('z-index')
			);
			console.log(index);
			if (index) mq.set({ ...mq, state: index });
			setTimeout(updateMq, MQ_UPDATE_INTERVAL);
		}

		updateMq();
	});
</script>

<Navbar />

<main class="[ main-container ] [ gap-2 padding-1 border-radius-cubed ]">
	<slot />
</main>

<style>
	@import url('../../static/posty.css');
</style>
