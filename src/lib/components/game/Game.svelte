<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let currentSceneId = "start";
  let currentChoiceId = 1;
  let fruitiness = [0, 0, 0, 0, 0, 0, 0, 0];

  const scenes = {
    start: {
      text: "You are tasked with slaying the evil Dragonfruit of Fruitale. The Dragonfruit is lurking on Mount Everzest. You:",
      choices: [
        {
          id: 1,
          text: "Decide to face it head on",
          goto: "combat",
          actions: [0, 0, 0, 0, 1, 1, 0, 1],
        },
        {
          id: 2,
          text: "Form a dragon-slaying party with your friends",
          goto: "combat",
          actions: [0, 0, 1, 0, 0, 1, 1, 0],
        },
        {
          id: 3,
          text: "Negotiate peace by offering it a treaty",
          goto: "negotiate",
          actions: [0, 1, 1, 0, 0, 0, 0, 0],
        },
      ],
    },
    combat: {
      flairs: {
        1: "With your trusty citrus sword, you march toward the peak of the mountain.",
        2: 'You gather Mango the Bold, Banana the Swift, and Lemon the Sharp. "We\'re ripe for the job!" you declare.You and your friends gather at the base of the mountain, ready to face the dragon.',
      },
      text: "How do you engage in combat with the dragon?",
      choices: [
        {
          id: 1,
          text: "Use your enchanted fruit weapon",
          goto: "dragon_defeated",
          actions: [0, 0, 0, 0, 0, 2, 1, 0],
        },
        {
          id: 2,
          text: "Use the terrain to your advantage",
          goto: "dragon_defeated",
          actions: [0, 1, 0, 1, 0, 0, 0, 0],
        },
        {
          id: 3,
          text: "Sneak behind the dragon for a surprise attack",
          goto: "dragon_defeated",
          actions: [0, 0, 0, 0, 1, 0, 0, 2],
        },
      ],
    },
    negotiate: {
      text: "You make your way to the peak of Mount Everzest to reason with the Dragonfruit.",
      choices: [
        {
          id: 1,
          text: "Use your persuasive skills to engage diplomatically",
          goto: "dragon_pacified",
          actions: [2, 1, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 2,
          text: "Spare the dragon's life, in return, it owes you a favor",
          goto: "dragon_pacified",
          actions: [2, 0, 0, 0, 0, 0, 0, 1],
        },
        {
          id: 3,
          text: "Compliment the Dragonfruit on their fierce exterior and offer to become allies",
          goto: "dragon_pacified",
          actions: [0, 2, 2, 0, 0, 0, 1, 0],
        },
      ],
    },
    dragon_defeated: {
      flairs: {
        1: 'You pull out your secret weapon—a legendary sword made from the sharpest citrus peel, capable of slicing through even the toughest fruit hides. You charge in with a battle cry, "Prepare to be juiced!", and engage the dragonfruit in a high-stakes battle.',
        2: 'You notice rocky cliffs, rolling boulders, and sharp citrus stalactites hanging from the cave ceiling. With a quick plan, you dodge and weave, tricking the dragonfruit into crashing into obstacles. "Time to make this battle a little more fruitful!" you say, using the mountain to your advantage.',
        3: "The dragonfruit has dozed off, clearly exhausted from guarding its lair. You tiptoe silently, avoiding any loud crunch of fruit underfoot, and raise your weapon for a sneak attack. \"Let's peel back this dragon's defenses!\" you whisper before striking.",
      },
      text: "The dragon is defeated and you decide to:",
      choices: [
        {
          id: 1,
          text: "Head directly back to tell the king that the evil dragonfruit is taken care of",
          goto: "interlude",
          actions: [0, 1, 0, 0, 0, 0, 0, 1],
        },
        {
          id: 2,
          text: "Explore the rest of Mount Everzest",
          goto: "interlude",
          actions: [0, 0, 1, 0, 0, 1, 0, 0],
        },
        {
          id: 3,
          text: "Rest for a while",
          goto: "interlude",
          actions: [1, 0, 1, 1, 0, 0, 0, 0],
        },
        {
          id: 4,
          text: "Gather some souvenirs from the dragonfruit's lair",
          goto: "interlude",
          actions: [0, 0, 0, 0, 1, 0, 1, 0],
        },
      ],
    },
    dragon_pacified: {
      flairs: {
        1: "You tap into your inner negotiator, using calm and logical reasoning to convince the Dragonfruit that peace is the best path forward. You offer compelling arguments about cooperation and how both of you can benefit by working together. \"Fighting won't ripen any good outcomes for either of us. Let's turn this battle into an opportunity,\" you suggest confidently.",
        2: "After a long conversation, you decide to spare the Dragonfruit, showing mercy. In exchange, it promises to owe you a great favor, whether that's helping in battle or offering its hidden treasure. \"Your life is spared, but one day, I'll come calling for your help. Don't be too bitter when that day comes!\" you say with a wink.",
        3: "You appeal to the Dragonfruit's pride, acknowledging its power and majesty. You propose an alliance, combining your strengths to control Mount Everzest together, instead of tearing each other apart.",
      },
      text: "The dragon is pacified and you decide to:",
      choices: [
        {
          id: 1,
          text: "Head directly back to tell the king that the evil dragonfruit is taken care of",
          goto: "interlude",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 2,
          text: "Explore the rest of Mount Everzest",
          goto: "interlude",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 3,
          text: "Rest for a while",
          goto: "interlude",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 4,
          text: "Gather some souvenirs from the dragonfruit's lair",
          goto: "interlude",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    },
    interlude: {
      flairs: {
        1: 'You rush back to the palace with your victory in hand. "The king will be berry proud!" you say, picturing the royal celebration in your honor. Perhaps you\'ll even get a golden fruit basket as a reward!',
        2: "With the dragonfruit gone, the mountain is finally ripe for exploration! Who knows what kinds of rare and exotic fruit relics you might find hidden among the rocky peaks? You might even discover the legendary Citrus Crystal said to grant eternal zest to whoever wields it.",
        3: 'It\'s been a long battle, and even the juiciest of heroes needs a break. You find a shady grove of apple trees and take a nap, dreaming of the sweet rewards to come. "After all, a rested fruit is a fresh fruit!" you think as you drift off.',
        4: "Why let all that exotic fruit go to waste? You decide to gather some dragonfruit scales and seeds, thinking they might fetch a good price back in town. Maybe you'll even plant your own dragonfruit orchard—if you're feeling adventurous.",
      },
      text: "",
      choices: [
        {
          id: 1,
          text: "Continue",
          goto: "kings_reward",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    },
    kings_reward: {
      text: "You made your way back to the fruit town. The king is delighted and grants you a reward of your choice. What do you choose?",
      choices: [
        {
          id: 1,
          text: "A garden with every type of fruit tree",
          goto: "rest_day",
          actions: [1, 0, 0, 0, 1, 0, 0, 0],
        },
        {
          id: 2,
          text: "A magical sword able to slay even more powerful monsters",
          goto: "rest_day",
          actions: [0, 0, 0, 0, 0, 1, 0, 1],
        },
        {
          id: 3,
          text: "A library of knowledge about the fruit world",
          goto: "rest_day",
          actions: [0, 2, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 4,
          text: "It was a team effort, ask your friends what they would like",
          goto: "rest_day",
          actions: [0, 0, 1, 1, 0, 0, 1, 0],
        },
      ],
    },
    rest_day: {
      text: "After receiving your reward, you spend the rest of the day:",
      choices: [
        {
          id: 1,
          text: "Telling your friends about your adventure",
          goto: "daytime",
          actions: [0, 0, 1, 0, 0, 0, 1, 0],
        },
        {
          id: 2,
          text: "Sleeping",
          goto: "daytime",
          actions: [1, 0, 0, 0, 1, 0, 0, 0],
        },
        {
          id: 3,
          text: "Throwing a hero's feast",
          goto: "daytime",
          actions: [0, 0, 0, 0, 0, 1, 0, 1],
        },
        {
          id: 4,
          text: "Finishing up leftover chores",
          goto: "daytime",
          actions: [0, 1, 0, 1, 0, 0, 0, 0],
        },
      ],
    },
    daytime: {
      text: "On the morning of second day, you decide to spend this day:",
      choices: [
        {
          id: 1,
          text: "walking through Fruitale",
          goto: "wishing_well",
          actions: [0, 1, 0, 0, 1, 1, 0, 0],
        },
        {
          id: 2,
          text: "hanging out with friends",
          goto: "wishing_well",
          actions: [0, 0, 1, 0, 0, 0, 1, 0],
        },
        {
          id: 3,
          text: "sleeping and getting lots of rest",
          goto: "wishing_well",
          actions: [1, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 4,
          text: "being productive",
          goto: "wishing_well",
          actions: [0, 1, 0, 1, 0, 0, 0, 1],
        },
      ],
    },
    wishing_well: {
      text: "Later in the day, while you were walking around in Fruitale, you stumble upon a wishing well! What do you do?",
      choices: [
        {
          id: 1,
          text: "Wish for eternal fruitfulness",
          goto: "goodnight",
          actions: [0, 0, 0, 1, 1, 1, 0, 0],
        },
        {
          id: 2,
          text: "Choose not to make a wish and instead protect the well from misuse",
          goto: "goodnight",
          actions: [1, 0, 1, 0, 0, 0, 0, 0],
        },
        {
          id: 3,
          text: "Destroy the well",
          goto: "goodnight",
          actions: [0, 1, 0, 0, 0, 0, 0, 1],
        },
      ],
    },
    goodnight: {
      text: "What do you dream about?",
      choices: [
        {
          id: 1,
          text: "More dragon-slaying adventures",
          goto: "result",
          actions: [0, 0, 0, 0, 1, 1, 0, 1],
        },
        {
          id: 2,
          text: "Peaceful days in Fruitale",
          goto: "result",
          actions: [1, 1, 1, 0, 0, 0, 0, 0],
        },
        {
          id: 3,
          text: "Hosting a grand fruit feast for all your friends",
          goto: "result",
          actions: [0, 0, 0, 1, 0, 0, 1, 0],
        },
      ],
    },
    result: {
      text: "From your Fruitale adventures, you discover yourself to be:",
    },
    template: {
      flairs: {
        1: "",
        2: "",
      },
      text: "",
      choices: [
        {
          id: 1,
          text: "",
          goto: "",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 2,
          text: "",
          goto: "",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          id: 3,
          text: "",
          goto: "",
          actions: [0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    },
  };

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
