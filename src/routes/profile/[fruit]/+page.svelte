<script>
  import { page } from "$app/stores";
  import { selectedProfile } from "$lib/stores/store.js";
  import FruitProfile from "$lib/components/game/FruitProfile.svelte";

  $selectedProfile = $page.params.fruit;
</script>

<FruitProfile fruit={$page.params.fruit} />
