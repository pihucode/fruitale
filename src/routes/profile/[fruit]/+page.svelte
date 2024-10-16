<script>
  import { page } from "$app/stores";
  import FruitProfile from "$lib/components/game/FruitProfile.svelte";
</script>

<FruitProfile fruit={$page.params.fruit} />
