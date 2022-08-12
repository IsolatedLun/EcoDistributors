<script>
	import { createMqIndicator } from '../utils/misc';
	import { onMount } from 'svelte';
	import Navbar from '../components/Layouts/Navbar/Navbar.svelte';
	import { mq } from '../stores/media-queries/mqStore';

	onMount(() => {
		window.addEventListener('resize', () => {
			const index = parseInt(
				window.getComputedStyle(createMqIndicator()).getPropertyValue('z-index'),
				10
			);

			if (index) mq.set({ ...mq, state: index });
		});
	});
</script>

<Navbar />

<main class="[ main-container ] [ gap-2 padding-1 border-radius-cubed ]">
	<slot />
</main>

<style>
	@import url('../../static/posty.css');
</style>
