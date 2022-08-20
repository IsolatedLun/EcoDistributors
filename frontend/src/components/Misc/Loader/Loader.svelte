<script lang="ts">
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';

	export let text = '';
</script>

<div
	class="[ loader ] [ grid place-items-center width-max-content margin-inline-auto margin-block-5 width-100 pos-relative ]"
>
	<TypoHeader h={2}>Loading...</TypoHeader>
	<p class="[ fs-500 ]">{text}</p>
	<div class="[ loader__bar ]" />
</div>
