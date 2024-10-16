<script>
  import Game from "$lib/components/game/Game.svelte";
  import { selectedProfile } from "$lib/stores/store.js";

  $selectedProfile = "default";
</script>

<Game />
