<script>
  import { scenes } from "$lib/data/scenes.js";

  let currentSceneId = "start";
  let currentChoiceId = 1;
  let fruitiness = [0, 0, 0, 0, 0, 0, 0, 0];

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

  const choiceAction = (choice) => {
    fruitiness = fruitiness.map(
      (value, index) => value + choice.actions[index]
    );
    currentChoiceId = choice.id;
    currentSceneId = choice.goto;
  };

  const getResultIndex = () => {
    const maxFruitiness = Math.max(...fruitiness);
    return fruitiness.indexOf(maxFruitiness);
  };

  const getFruityResult = () => {
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
    return result[getResultIndex()];
  };

  $: currentScene = scenes[currentSceneId];
</script>

<div>
  <!-- <p>fruitiness: {fruitiness}</p> -->
  <h1>Fruitale</h1>
  <div class="scene">
    {#if currentScene.img}
      <img
        src={`/images/${currentScene.img}.jpg`}
        alt="scene"
        class="img"
        style={currentSceneId === "start" ? "height: 400px" : ""}
      />
    {/if}
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
          <button class="btn-choice" on:click={() => choiceAction(choice)}
            >{choice.text}</button
          >
        {/each}
      </div>
    {/if}
    {#if currentSceneId === "result"}
      <p style="margin-top: 0;">
        {getFruityResult()}
      </p>
      <img
        src={`/images/${fruits[getResultIndex()]}.jpg`}
        alt="fruit"
        class="fruit-avatar"
      />
      <a href="/profile/{fruits[getResultIndex()]}"
        >Check out your fruit profile!</a
      >
    {/if}
  </div>
</div>

<style>
  * {
    text-align: center;
  }
  .scene {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img {
    width: 400px;
    height: 240px;
    border-radius: 8px;
    background-color: rgb(255, 200, 150);
  }
  .fruit-avatar {
    width: 240px;
    height: 240px;
    border-radius: 8px;
    background-color: rgb(255, 200, 150);
  }
  .flair {
    margin-bottom: 0;
  }
  .choices {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;
  }
  .btn-choice {
    padding: 10px;
    background-color: rgb(240, 171, 128);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: Kongtext, "Courier New", Courier, monospace;
    color: rgb(111, 56, 31);
    font-size: 12px;
    transition: all 0.3s ease-in-out;
  }
  .btn-choice:hover {
    color: rgb(153, 85, 42);
    background-color: rgb(255, 200, 150);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    img {
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
