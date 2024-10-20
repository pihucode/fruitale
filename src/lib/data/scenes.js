export const scenes = {
  start: {
    img: "fruit-circle",
    text: "Find out what kind of fruit you are!",
    choices: [
      {
        id: 1,
        text: "Take Quiz",
        goto: "mountain",
        actions: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
  mountain: {
    img: "mount-everzest",
    text: "You are tasked with slaying the evil Dragonfruit of Fruitale. The Dragonfruit is lurking on Mount Everzest. You:",
    choices: [
      {
        id: 1,
        text: "Decide to face it head-on",
        goto: "combat",
        actions: [0, 0, 0, 1, 1, 1, 0, 1],
      },
      {
        id: 2,
        text: "Form a dragon-slaying party with your friends",
        goto: "combat",
        actions: [0, 0, 0, 0, 0, 0, 1, 0],
      },
      {
        id: 3,
        text: "Attempt to negotiate peace with the Dragonfruit",
        goto: "negotiate",
        actions: [1, 1, 1, 0, 0, 0, 0, 0],
      },
    ],
  },
  combat: {
    img: "dragonfruit",
    flairs: {
      1: "With your trusty citrus sword, you march towards Mount Everzest, ready as ever.",
      2: 'You gather your friends and declare, "We\'re ripe for the job!". You and your friends gather at the base of the mountain, ready to face the dragon.',
    },
    text: "How do you engage in combat with the dragon?",
    choices: [
      {
        id: 1,
        text: "Take the initiative with your trusty sword",
        goto: "dragon_defeated",
        actions: [0, 0, 0, 0, 0, 1, 1, 0],
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
        actions: [0, 0, 0, 0, 1, 0, 0, 1],
      },
    ],
  },
  negotiate: {
    img: "dragonfruit",
    text: "You make your way to the peak of Mount Everzest to reason with the Dragonfruit.",
    choices: [
      {
        id: 1,
        text: "Use your persuasive skills and charisma to engage diplomatically",
        goto: "dragon_pacified",
        actions: [1, 0, 1, 0, 0, 0, 0, 0],
      },
      {
        id: 2,
        text: "Gaslight the dragon into thinking it owes you a favor",
        goto: "dragon_pacified",
        actions: [0, 0, 0, 0, 1, 0, 0, 1],
      },
      {
        id: 3,
        text: "Compliment the dragon on their fierce exterior and offer to become allies",
        goto: "dragon_pacified",
        actions: [0, 1, 0, 0, 0, 0, 1, 0],
      },
    ],
  },
  dragon_defeated: {
    img: "dragonfruit_defeated",
    flairs: {
      1: 'You charge in with a battle cry, "Prepare to be juiced!", and engage the dragonfruit in a high-stakes battle.',
      2: "You notice rocky cliffs, rolling boulders, and sharp stalactites hanging from the cave ceiling. With a quick plan, you dodge and weave, tricking the evil Dragonfruit into crashing into obstacles.",
      3: "The evil Dragonfruit has dozed off, exhausted from patrolling its lair. You tiptoe quitely, avoiding any loud crunches of fruit peels underfoot, and raise your weapon for a sneak attack. \"Let's peel back this dragon's defenses!\" you whisper before striking.",
    },
    text: "The dragon is defeated and you decide to:",
    choices: [
      {
        id: 1,
        text: "Head back directly to tell the King that the evil Dragonfruit is taken care of",
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
        actions: [1, 0, 0, 1, 0, 0, 0, 0],
      },
      {
        id: 4,
        text: "Gather some souvenirs from the Dragonfruit's lair",
        goto: "interlude",
        actions: [0, 0, 0, 0, 1, 0, 1, 0],
      },
    ],
  },
  dragon_pacified: {
    img: "dragonfruit_pacified",
    flairs: {
      1: "Using calm and logical reasoning, you try to convince the Dragonfruit that peace is the best path forward. You offer compelling arguments about cooperation and how both of you can benefit by working together. \"Fighting won't ripen any good outcomes for either of us. Let's turn this meeting into an opportunity,\" you suggest confidently.",
      2: "You successfully gaslight the Dragonfruit and it promises to owe you a great favor, whether that's helping in battle or offering its stashed treasure.",
      3: "You appeal to the Dragonfruit's pride, acknowledging its power and majesty. You propose an alliance, combining your strengths to control Mount Everzest together, instead of tearing each other apart.",
    },
    text: "The dragon is pacified and you decide to:",
    choices: [
      {
        id: 1,
        text: "Head back directly to tell the King that the evil Dragonfruit is taken care of",
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
        actions: [1, 0, 0, 1, 0, 0, 0, 0],
      },
      {
        id: 4,
        text: "Gather some souvenirs from the Dragonfruit's lair",
        goto: "interlude",
        actions: [0, 0, 0, 0, 1, 0, 1, 0],
      },
    ],
  },
  interlude: {
    flairs: {
      1: 'You rush back to the palace with your victory in hand. "The king will be berry proud!" you say, picturing the royal celebration in your honor. Perhaps you\'ll even get a golden fruit basket as a reward!',
      2: "With the evil Dragonfruit gone, the mountain is finally ripe for exploration! Who knows what kinds of rare and exotic fruit relics you might find hidden among the fruity peaks?",
      3: "It's been a long battle, and even the juiciest of heroes needs a break. You find a shady grove of banana trees and take a nap, dreaming of the sweet rewards to come.",
      4: "Why let all that exotic fruit go to waste? You decide to gather some dragonfruit scales and seeds, thinking they might fetch a good price back in town. Maybe you'll even plant your own dragonfruit orchard if you're feeling adventurous.",
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
    img: "kings-reward",
    text: "After a fruitful journey, you made your way back to Fruitale. The king is delighted and grants you a reward of your choice. What do you choose?",
    choices: [
      {
        id: 1,
        text: "A garden with every type of fruit tree",
        goto: "rest_day",
        actions: [1, 0, 1, 0, 1, 0, 0, 0],
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
        actions: [0, 1, 0, 0, 0, 0, 0, 0],
      },
      {
        id: 4,
        text: "It was a team effort, ask your friends what they would like",
        goto: "rest_day",
        actions: [0, 0, 0, 1, 0, 0, 1, 0],
      },
    ],
  },
  rest_day: {
    img: "rest-day",
    text: "After receiving your juicy reward, you spend the rest of the day:",
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
    img: "daytime",
    text: "On the morning of second day, you decide to spend this day:",
    choices: [
      {
        id: 1,
        text: "Walking through Fruitale",
        goto: "wishing_well",
        actions: [0, 0, 0, 0, 1, 1, 0, 0],
      },
      {
        id: 2,
        text: "Hanging out with friends",
        goto: "wishing_well",
        actions: [0, 0, 1, 0, 0, 0, 1, 0],
      },
      {
        id: 3,
        text: "Sleeping and getting lots of rest",
        goto: "wishing_well",
        actions: [1, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        id: 4,
        text: "Being productive",
        goto: "wishing_well",
        actions: [0, 1, 0, 1, 0, 0, 0, 1],
      },
    ],
  },
  wishing_well: {
    img: "wishing-well",
    text: "Later in the day, while you were walking around in Fruitale, you stumble upon a wishing well! What do you do?",
    choices: [
      {
        id: 1,
        text: "Wish for eternal fruitfulness",
        goto: "goodnight",
        actions: [0, 0, 0, 1, 0, 1, 0, 0],
      },
      {
        id: 2,
        text: "Choose not to make a wish and instead protect the well from misuse",
        goto: "goodnight",
        actions: [1, 0, 1, 0, 0, 0, 1, 0],
      },
      {
        id: 3,
        text: "Destroy the well",
        goto: "goodnight",
        actions: [0, 1, 0, 0, 1, 0, 0, 1],
      },
    ],
  },
  goodnight: {
    img: "sleepwell",
    text: "Final question! It's the end of the day and you are comfy in bed ready to sleep. What do you dream about?",
    choices: [
      {
        id: 1,
        text: "More dragon-slaying adventures!",
        goto: "result",
        actions: [0, 0, 0, 0, 1, 1, 0, 1],
      },
      {
        id: 2,
        text: "Peaceful days in Fruitale~",
        goto: "result",
        actions: [1, 1, 0, 0, 0, 0, 0, 0],
      },
      {
        id: 3,
        text: "Hosting a grand fruit feast for all your friends <3",
        goto: "result",
        actions: [0, 0, 1, 1, 0, 0, 1, 0],
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
