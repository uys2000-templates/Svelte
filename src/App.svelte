<script lang="ts">
  import { page, layout } from "./stores/router";
  import "./router/router";
</script>

<svelte:component this={$layout} >
  <svelte:component this={$page} />
</svelte:component>
