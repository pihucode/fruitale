<script>
  import { profiles } from "$lib/data/profiles.js";

  export let fruit;
  const fruits = [
    "avocado",
    "blueberry",
    "peach",
    "grapes",
    "banana",
    "mango",
    "orange",
    "lemon",
  ];
  const emojis = ["🥑", "🫐", "🍑", "🍇", "🍌", "🥭", "🍊", "🍋"];
  const symbol = emojis[fruits.indexOf(fruit)];

  $: profile = profiles[fruit];
</script>

<div class="profile">
  <h1>{profile.name}</h1>
  <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 12px;">
    <!-- <div class="img"></div> -->
    <img src={`/images/${fruit}.jpg`} alt="fruit" class="fruit-avatar" />
    <div class="fruitiness">
      <h2>Fruitiness</h2>
      <ul>
        <li>
          <div>Fruity Flavor</div>
          <div style="font-size: 20px">
            {#each Array(profile.fruitiness[0]) as _, i}{symbol}{/each}
          </div>
        </li>
        <li>
          <div>Core Strength</div>
          <div style="font-size: 20px">
            {#each Array(profile.fruitiness[1]) as _, i}{symbol}{/each}
          </div>
        </li>
        <li>
          <div>Zesty Nature</div>
          <div style="font-size: 20px">
            {#each Array(profile.fruitiness[2]) as _, i}{symbol}{/each}
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="about">
    <h2>About</h2>
    <p>{profile.description}</p>
  </div>
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
</div>

<style>
  p,
  li {
    font-size: 14px;
  }
  li {
    text-align: left;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 18px;
  }
  .profile {
    text-align: center;
  }
  .fruit-avatar {
    width: 240px;
    height: 240px;
    border-radius: 8px;
    background-color: rgb(255, 200, 150);
  }
</style>
