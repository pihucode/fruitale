import { c as create_ssr_component, b as add_attribute, e as escape, d as each, a as subscribe, f as set_store_value, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { s as selectedProfile } from "../../chunks/store.js";
const scenes = {
  start: {
    img: "mount-everzest",
    text: "You are tasked with slaying the evil Dragonfruit of Fruitale. The Dragonfruit is lurking on Mount Everzest. You:",
    choices: [
      {
        id: 1,
        text: "Decide to face it head on",
        goto: "combat",
        actions: [0, 0, 0, 0, 1, 1, 0, 1]
      },
      {
        id: 2,
        text: "Form a dragon-slaying party with your friends",
        goto: "combat",
        actions: [0, 0, 1, 0, 0, 1, 1, 0]
      },
      {
        id: 3,
        text: "Negotiate peace by offering it a treaty",
        goto: "negotiate",
        actions: [0, 1, 1, 0, 0, 0, 0, 0]
      }
    ]
  },
  combat: {
    img: "dragonfruit",
    flairs: {
      1: "With your trusty citrus sword, you march toward the peak of the mountain.",
      2: `You gather Mango the Bold, Banana the Swift, and Lemon the Sharp. "We're ripe for the job!" you declare.You and your friends gather at the base of the mountain, ready to face the dragon.`
    },
    text: "How do you engage in combat with the dragon?",
    choices: [
      {
        id: 1,
        text: "Use your enchanted fruit weapon",
        goto: "dragon_defeated",
        actions: [0, 0, 0, 0, 0, 2, 1, 0]
      },
      {
        id: 2,
        text: "Use the terrain to your advantage",
        goto: "dragon_defeated",
        actions: [0, 1, 0, 1, 0, 0, 0, 0]
      },
      {
        id: 3,
        text: "Sneak behind the dragon for a surprise attack",
        goto: "dragon_defeated",
        actions: [0, 0, 0, 0, 1, 0, 0, 2]
      }
    ]
  },
  negotiate: {
    img: "dragonfruit",
    text: "You make your way to the peak of Mount Everzest to reason with the Dragonfruit.",
    choices: [
      {
        id: 1,
        text: "Use your persuasive skills to engage diplomatically",
        goto: "dragon_pacified",
        actions: [2, 1, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 2,
        text: "Spare the dragon's life, in return, it owes you a favor",
        goto: "dragon_pacified",
        actions: [2, 0, 0, 0, 0, 0, 0, 1]
      },
      {
        id: 3,
        text: "Compliment the Dragonfruit on their fierce exterior and offer to become allies",
        goto: "dragon_pacified",
        actions: [0, 2, 2, 0, 0, 0, 1, 0]
      }
    ]
  },
  dragon_defeated: {
    img: "dragonfruit_defeated",
    flairs: {
      1: 'You pull out your secret weapon—a legendary sword made from the sharpest citrus peel, capable of slicing through even the toughest fruit hides. You charge in with a battle cry, "Prepare to be juiced!", and engage the dragonfruit in a high-stakes battle.',
      2: 'You notice rocky cliffs, rolling boulders, and sharp citrus stalactites hanging from the cave ceiling. With a quick plan, you dodge and weave, tricking the dragonfruit into crashing into obstacles. "Time to make this battle a little more fruitful!" you say, using the mountain to your advantage.',
      3: `The dragonfruit has dozed off, clearly exhausted from guarding its lair. You tiptoe silently, avoiding any loud crunch of fruit underfoot, and raise your weapon for a sneak attack. "Let's peel back this dragon's defenses!" you whisper before striking.`
    },
    text: "The dragon is defeated and you decide to:",
    choices: [
      {
        id: 1,
        text: "Head directly back to tell the king that the evil dragonfruit is taken care of",
        goto: "interlude",
        actions: [0, 1, 0, 0, 0, 0, 0, 1]
      },
      {
        id: 2,
        text: "Explore the rest of Mount Everzest",
        goto: "interlude",
        actions: [0, 0, 1, 0, 0, 1, 0, 0]
      },
      {
        id: 3,
        text: "Rest for a while",
        goto: "interlude",
        actions: [1, 0, 1, 1, 0, 0, 0, 0]
      },
      {
        id: 4,
        text: "Gather some souvenirs from the dragonfruit's lair",
        goto: "interlude",
        actions: [0, 0, 0, 0, 1, 0, 1, 0]
      }
    ]
  },
  dragon_pacified: {
    img: "dragonfruit_pacified",
    flairs: {
      1: `You tap into your inner negotiator, using calm and logical reasoning to convince the Dragonfruit that peace is the best path forward. You offer compelling arguments about cooperation and how both of you can benefit by working together. "Fighting won't ripen any good outcomes for either of us. Let's turn this battle into an opportunity," you suggest confidently.`,
      2: `After a long conversation, you decide to spare the Dragonfruit, showing mercy. In exchange, it promises to owe you a great favor, whether that's helping in battle or offering its hidden treasure. "Your life is spared, but one day, I'll come calling for your help. Don't be too bitter when that day comes!" you say with a wink.`,
      3: "You appeal to the Dragonfruit's pride, acknowledging its power and majesty. You propose an alliance, combining your strengths to control Mount Everzest together, instead of tearing each other apart."
    },
    text: "The dragon is pacified and you decide to:",
    choices: [
      {
        id: 1,
        text: "Head directly back to tell the king that the evil dragonfruit is taken care of",
        goto: "interlude",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 2,
        text: "Explore the rest of Mount Everzest",
        goto: "interlude",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 3,
        text: "Rest for a while",
        goto: "interlude",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 4,
        text: "Gather some souvenirs from the dragonfruit's lair",
        goto: "interlude",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  interlude: {
    img: "interlude",
    flairs: {
      1: `You rush back to the palace with your victory in hand. "The king will be berry proud!" you say, picturing the royal celebration in your honor. Perhaps you'll even get a golden fruit basket as a reward!`,
      2: "With the dragonfruit gone, the mountain is finally ripe for exploration! Who knows what kinds of rare and exotic fruit relics you might find hidden among the rocky peaks? You might even discover the legendary Citrus Crystal said to grant eternal zest to whoever wields it.",
      3: `It's been a long battle, and even the juiciest of heroes needs a break. You find a shady grove of apple trees and take a nap, dreaming of the sweet rewards to come. "After all, a rested fruit is a fresh fruit!" you think as you drift off.`,
      4: "Why let all that exotic fruit go to waste? You decide to gather some dragonfruit scales and seeds, thinking they might fetch a good price back in town. Maybe you'll even plant your own dragonfruit orchard—if you're feeling adventurous."
    },
    text: "",
    choices: [
      {
        id: 1,
        text: "Continue",
        goto: "kings_reward",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  kings_reward: {
    img: "kings-reward",
    text: "You made your way back to the fruit town. The king is delighted and grants you a reward of your choice. What do you choose?",
    choices: [
      {
        id: 1,
        text: "A garden with every type of fruit tree",
        goto: "rest_day",
        actions: [1, 0, 0, 0, 1, 0, 0, 0]
      },
      {
        id: 2,
        text: "A magical sword able to slay even more powerful monsters",
        goto: "rest_day",
        actions: [0, 0, 0, 0, 0, 1, 0, 1]
      },
      {
        id: 3,
        text: "A library of knowledge about the fruit world",
        goto: "rest_day",
        actions: [0, 2, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 4,
        text: "It was a team effort, ask your friends what they would like",
        goto: "rest_day",
        actions: [0, 0, 1, 1, 0, 0, 1, 0]
      }
    ]
  },
  rest_day: {
    img: "rest-day",
    text: "After receiving your reward, you spend the rest of the day:",
    choices: [
      {
        id: 1,
        text: "Telling your friends about your adventure",
        goto: "daytime",
        actions: [0, 0, 1, 0, 0, 0, 1, 0]
      },
      {
        id: 2,
        text: "Sleeping",
        goto: "daytime",
        actions: [1, 0, 0, 0, 1, 0, 0, 0]
      },
      {
        id: 3,
        text: "Throwing a hero's feast",
        goto: "daytime",
        actions: [0, 0, 0, 0, 0, 1, 0, 1]
      },
      {
        id: 4,
        text: "Finishing up leftover chores",
        goto: "daytime",
        actions: [0, 1, 0, 1, 0, 0, 0, 0]
      }
    ]
  },
  daytime: {
    img: "daytime",
    text: "On the morning of second day, you decide to spend this day:",
    choices: [
      {
        id: 1,
        text: "walking through Fruitale",
        goto: "wishing_well",
        actions: [0, 1, 0, 0, 1, 1, 0, 0]
      },
      {
        id: 2,
        text: "hanging out with friends",
        goto: "wishing_well",
        actions: [0, 0, 1, 0, 0, 0, 1, 0]
      },
      {
        id: 3,
        text: "sleeping and getting lots of rest",
        goto: "wishing_well",
        actions: [1, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 4,
        text: "being productive",
        goto: "wishing_well",
        actions: [0, 1, 0, 1, 0, 0, 0, 1]
      }
    ]
  },
  wishing_well: {
    img: "wishing-well",
    text: "Later in the day, while you were walking around in Fruitale, you stumble upon a wishing well! What do you do?",
    choices: [
      {
        id: 1,
        text: "Wish for eternal fruitfulness",
        goto: "goodnight",
        actions: [0, 0, 0, 1, 1, 1, 0, 0]
      },
      {
        id: 2,
        text: "Choose not to make a wish and instead protect the well from misuse",
        goto: "goodnight",
        actions: [1, 0, 1, 0, 0, 0, 0, 0]
      },
      {
        id: 3,
        text: "Destroy the well",
        goto: "goodnight",
        actions: [0, 1, 0, 0, 0, 0, 0, 1]
      }
    ]
  },
  goodnight: {
    img: "sleepwell",
    text: "What do you dream about?",
    choices: [
      {
        id: 1,
        text: "More dragon-slaying adventures",
        goto: "result",
        actions: [0, 0, 0, 0, 1, 1, 0, 1]
      },
      {
        id: 2,
        text: "Peaceful days in Fruitale",
        goto: "result",
        actions: [1, 1, 1, 0, 0, 0, 0, 0]
      },
      {
        id: 3,
        text: "Hosting a grand fruit feast for all your friends",
        goto: "result",
        actions: [0, 0, 0, 1, 0, 0, 1, 0]
      }
    ]
  },
  result: {
    text: "From your Fruitale adventures, you discover yourself to be:"
  },
  template: {
    flairs: {
      1: "",
      2: ""
    },
    text: "",
    choices: [
      {
        id: 1,
        text: "",
        goto: "",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 2,
        text: "",
        goto: "",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        id: 3,
        text: "",
        goto: "",
        actions: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  }
};
const css = {
  code: '.svelte-1rqos3{text-align:center}.scene.svelte-1rqos3{font-size:14px;display:flex;flex-direction:column;align-items:center}.img.svelte-1rqos3{width:400px;height:240px;border-radius:8px;background-color:rgb(255, 200, 150)}.flair.svelte-1rqos3{margin-bottom:0}.choices.svelte-1rqos3{display:flex;flex-direction:column;gap:24px;padding:0 24px}.btn-choice.svelte-1rqos3{padding:10px;background-color:rgb(240, 171, 128);border:none;border-radius:8px;cursor:pointer;font-family:Kongtext, "Courier New", Courier, monospace;color:rgb(111, 56, 31);font-size:12px;transition:all 0.3s ease-in-out}.btn-choice.svelte-1rqos3:hover{color:rgb(153, 85, 42);background-color:rgb(255, 200, 150);transform:scale(1.1)}',
  map: '{"version":3,"file":"Game.svelte","sources":["Game.svelte"],"sourcesContent":["<script>\\r\\n  import { base } from \\"$app/paths\\";\\r\\n  import { scenes } from \\"$lib/data/scenes.js\\";\\r\\n\\r\\n  let currentSceneId = \\"start\\";\\r\\n  let currentChoiceId = 1;\\r\\n  let fruitiness = [0, 0, 0, 0, 0, 0, 0, 0];\\r\\n\\r\\n  const choiceAction = (choice) => {\\r\\n    fruitiness = fruitiness.map(\\r\\n      (value, index) => value + choice.actions[index]\\r\\n    );\\r\\n    currentChoiceId = choice.id;\\r\\n    currentSceneId = choice.goto;\\r\\n  };\\r\\n\\r\\n  const getFruityResult = () => {\\r\\n    const maxFruitiness = Math.max(...fruitiness);\\r\\n    const result = [\\r\\n      \\"You are an avocado!\\",\\r\\n      \\"You are a blueberry!\\",\\r\\n      \\"You are a peach!\\",\\r\\n      \\"You are grapes!\\",\\r\\n      \\"You are a banana!\\",\\r\\n      \\"You are a mango!\\",\\r\\n      \\"You are an orange!\\",\\r\\n      \\"You are a lemon!\\",\\r\\n    ];\\r\\n    return result[fruitiness.indexOf(maxFruitiness)];\\r\\n  };\\r\\n\\r\\n  $: currentScene = scenes[currentSceneId];\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n  <!-- <p>currentChoiceId: {currentChoiceId}</p>\\r\\n  <p>currentSceneId: {currentSceneId}</p>\\r\\n  <p>fruitiness: {fruitiness}</p> -->\\r\\n  <h1>Fruitale</h1>\\r\\n  <div class=\\"scene\\">\\r\\n    <!-- <div class=\\"img\\"></div> -->\\r\\n    {#if currentScene.img}\\r\\n      <img\\r\\n        src={`${base}/images/${currentScene.img}.jpg`}\\r\\n        alt=\\"scene\\"\\r\\n        class=\\"img\\"\\r\\n      />\\r\\n    {/if}\\r\\n    {#if currentScene.flairs}\\r\\n      <p class=\\"flair\\">\\r\\n        {currentScene.flairs[currentChoiceId]}\\r\\n      </p>\\r\\n    {/if}\\r\\n    {#if currentScene.text}\\r\\n      <p class=\\"text\\">\\r\\n        {currentScene.text}\\r\\n      </p>\\r\\n    {/if}\\r\\n    {#if currentScene.choices}\\r\\n      <div class=\\"choices\\">\\r\\n        {#each currentScene.choices as choice}\\r\\n          <button class=\\"btn-choice\\" on:click={() => choiceAction(choice)}\\r\\n            >{choice.text}</button\\r\\n          >\\r\\n        {/each}\\r\\n      </div>\\r\\n    {/if}\\r\\n    {#if currentSceneId === \\"result\\"}\\r\\n      <p style=\\"margin-top: 0;\\">\\r\\n        {getFruityResult()}\\r\\n      </p>\\r\\n    {/if}\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  * {\\r\\n    text-align: center;\\r\\n  }\\r\\n  .scene {\\r\\n    font-size: 14px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .img {\\r\\n    width: 400px;\\r\\n    height: 240px;\\r\\n    border-radius: 8px;\\r\\n    background-color: rgb(255, 200, 150);\\r\\n  }\\r\\n  .flair {\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n  .choices {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 24px;\\r\\n    padding: 0 24px;\\r\\n  }\\r\\n  .btn-choice {\\r\\n    padding: 10px;\\r\\n    background-color: rgb(240, 171, 128);\\r\\n    border: none;\\r\\n    border-radius: 8px;\\r\\n    cursor: pointer;\\r\\n    font-family: Kongtext, \\"Courier New\\", Courier, monospace;\\r\\n    color: rgb(111, 56, 31);\\r\\n    font-size: 12px;\\r\\n    transition: all 0.3s ease-in-out;\\r\\n  }\\r\\n  .btn-choice:hover {\\r\\n    color: rgb(153, 85, 42);\\r\\n    background-color: rgb(255, 200, 150);\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4EE,cAAE,CACA,UAAU,CAAE,MACd,CACA,oBAAO,CACL,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CACA,kBAAK,CACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CACA,oBAAO,CACL,aAAa,CAAE,CACjB,CACA,sBAAS,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,CAAC,CAAC,IACb,CACA,yBAAY,CACV,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,QAAQ,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CACxD,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB,CACA,yBAAW,MAAO,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACvB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,SAAS,CAAE,MAAM,GAAG,CACtB"}'
};
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentScene;
  let currentSceneId = "start";
  let currentChoiceId = 1;
  $$result.css.add(css);
  currentScene = scenes[currentSceneId];
  return `<div class="svelte-1rqos3"> <h1 class="svelte-1rqos3" data-svelte-h="svelte-1il0gke">Fruitale</h1> <div class="scene svelte-1rqos3"> ${currentScene.img ? `<img${add_attribute("src", `${base}/images/${currentScene.img}.jpg`, 0)} alt="scene" class="img svelte-1rqos3">` : ``} ${currentScene.flairs ? `<p class="flair svelte-1rqos3">${escape(currentScene.flairs[currentChoiceId])}</p>` : ``} ${currentScene.text ? `<p class="text svelte-1rqos3">${escape(currentScene.text)}</p>` : ``} ${currentScene.choices ? `<div class="choices svelte-1rqos3">${each(currentScene.choices, (choice) => {
    return `<button class="btn-choice svelte-1rqos3">${escape(choice.text)}</button>`;
  })}</div>` : ``} ${``}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProfile, $$unsubscribe_selectedProfile;
  $$unsubscribe_selectedProfile = subscribe(selectedProfile, (value) => $selectedProfile = value);
  set_store_value(selectedProfile, $selectedProfile = "default", $selectedProfile);
  $$unsubscribe_selectedProfile();
  return `${validate_component(Game, "Game").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
