<script>
  import { onMount } from "svelte";
  import "@esri/calcite-components/dist/calcite/calcite.css";

  onMount(async () => {
    console.log("mounted");
    await import("@esri/calcite-components/dist/components/calcite-button");
  });
</script>

<main>
  <calcite-button on:click={() => console.log("calcite button click")}
    >My Button</calcite-button
  >
</main>

<style>
</style>
