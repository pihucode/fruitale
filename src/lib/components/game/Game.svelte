<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { scenes } from "$lib/data/scenes.js";

  let currentSceneId = "start";
  let currentChoiceId = 1;
  let fruitiness = [0, 0, 0, 0, 0, 0, 0, 0];

  const choiceAction = (choice) => {
    fruitiness = fruitiness.map(
      (value, index) => value + choice.actions[index]
    );
    currentChoiceId = choice.id;
    currentSceneId = choice.goto;
  };

  const getFruityResult = () => {
    const maxFruitiness = Math.max(...fruitiness);
    const result = [
      "You are an avocado!",
      "You are a blueberry!",
      "You are a peach!",
      "You are grapes!",
      "You are a banana!",
      "You are a mango!",
      "You are an orange!",
      "You are a lemon!",
    ];
    return result[fruitiness.indexOf(maxFruitiness)];
  };

  $: currentScene = scenes[currentSceneId];
</script>

<div>
  <p>currentChoiceId: {currentChoiceId}</p>
  <p>currentSceneId: {currentSceneId}</p>
  <p>fruitiness: {fruitiness}</p>

  <div class="scene">
    {#if currentScene.flairs}
      <p class="flair">
        {currentScene.flairs[currentChoiceId]}
      </p>
    {/if}
    {#if currentScene.text}
      <p class="text">
        {currentScene.text}
      </p>
    {/if}
    {#if currentScene.choices}
      <div class="choices">
        {#each currentScene.choices as choice}
          <button on:click={() => choiceAction(choice)}>{choice.text}</button>
        {/each}
      </div>
    {/if}
    {#if currentSceneId === "result"}
      <p>
        {getFruityResult()}
      </p>
    {/if}
  </div>
</div>
