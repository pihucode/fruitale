<script>
  import { profiles } from "$lib/data/profiles.js";

  export let fruit;

  $: profile = profiles[fruit];
</script>

<div>
  <h1>{profile.name}</h1>
  <div class="img"></div>
  <p>{profile.description}</p>
  <div class="traits">
    <h2>Traits</h2>
    <ul>
      {#each profile.traits as trait}
        <li>{trait}</li>
      {/each}
    </ul>
  </div>
  <h2>Fun Fact</h2>
  <p>{profile.fact}</p>
  <div class="fruitiness">
    <h2>Fruitiness</h2>
    <p>
      Fruity Flavor: {#each Array(profile.fruitiness[0]) as _, i}#{/each}
    </p>
    <p>
      Core Strength: {#each Array(profile.fruitiness[1]) as _, i}#{/each}
    </p>
    <p>
      Zesty Nature: {#each Array(profile.fruitiness[2]) as _, i}#{/each}
    </p>
  </div>
</div>

<style>
  .img {
    width: 80px;
    height: 80px;
    background-color: lightskyblue;
  }
</style>
