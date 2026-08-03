<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    console.log(window.location.href.split("/").pop());

  if (
    window.location.href.split("/").pop() == null ||
    window.location.href.split("/").pop() == undefined ||
    window.location.href.split("/").pop() == ""
  ) {
    window.open("/about", "_self");
  }
  })
</script>

<style>
</style>
