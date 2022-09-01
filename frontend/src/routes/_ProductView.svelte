<script>
  import ProductView from "../components/Views/ProductView/ProductView.svelte";

  export let params = {};
</script>

<ProductView id={params.id} name={params.name} />
