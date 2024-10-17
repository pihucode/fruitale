import { c as create_ssr_component, e as escape, b as add_attribute, d as each, a as subscribe, f as set_store_value, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { s as selectedProfile } from "../../../../chunks/store.js";
import { b as base } from "../../../../chunks/paths.js";
const profiles = {
  avocado: {
    name: "Avocado",
    description: "Smooth, versatile, and calm under pressure. Avocados are nurturing and balanced, providing stability and comfort to others while being adaptable in different situations.",
    traits: [
      "Avocados are compassionate and supportive, always considering others’ feelings.",
      "They remain calm under pressure and approach situations with a balanced perspective."
    ],
    fact: "Avocado is a fruit that is grown in warm climates.",
    fruitiness: [3, 5, 1]
  },
  blueberry: {
    name: "Blueberry",
    description: "Quiet but full of hidden strengths. Blueberries are thoughtful, introverted, and full of wisdom, thriving in smaller groups and deeper connections.",
    traits: [
      "Blueberries are deep thinkers, often reflecting on their thoughts and feelings.",
      "They enjoy solving problems and understanding complex ideas, preferring to analyze things before acting.",
      "Blueberries are more introverted and enjoy spending time in smaller groups or alone."
    ],
    fact: " ",
    fruitiness: [3, 3, 2]
  },
  peach: {
    name: "Peach",
    description: "Soft and gentle but with a core of strength. Peach personalities are kind, diplomatic, and handle difficult situations with grace.",
    traits: [
      "Peaches are kind, caring, and often seek to make others feel comfortable.",
      "They value harmony and try to resolve conflicts peacefully, preferring compromise."
    ],
    fact: "",
    fruitiness: [4, 3, 1]
  },
  grapes: {
    name: "Grapes",
    description: "Adaptable and cooperative. Grape personalities work well in groups and enjoy teamwork, thriving when they're part of something bigger.",
    traits: [
      "Grapes thrive in group settings and enjoy working with others to achieve shared goals.",
      "They can adapt to new situations with ease and are open to change.",
      ""
    ],
    fact: "",
    fruitiness: [3, 2, 3]
  },
  banana: {
    name: "Banana",
    description: "Fun, optimistic, and a bit quirky. Banana personalities are easygoing and tend to bring a smile to those around them.",
    traits: [
      "Bananas bring a sense of fun and joy to any situation, often finding humor in life.",
      "Bananas enjoy living in the moment and are open to new experiences.",
      "They have a positive outlook and are always looking on the bright side."
    ],
    fact: "",
    fruitiness: [4, 1, 3]
  },
  mango: {
    name: "Mango",
    description: "Adventurous and bold, always ready to try new things. Mango personalities are passionate and love exploring different cultures and experiences.",
    traits: [
      "They naturally draw others in with their energy and enthusiasm.",
      "Mangos value their freedom and enjoy paving their own path in life.",
      "Mangos are unafraid to take risks and dive headfirst into new challenges."
    ],
    fact: "",
    fruitiness: [5, 2, 1]
  },
  orange: {
    name: "Orange",
    description: "Bright and energetic, oranges bring energy and enthusiasm to any situation, inspiring those around them.",
    traits: [
      "They enjoy interacting with others and tend to be the life of the party.",
      "Oranges bring energy to any situation and often inspire others.",
      ""
    ],
    fact: "",
    fruitiness: [5, 1, 2]
  },
  lemon: {
    name: "Lemon",
    description: "Sharp, witty, and a bit of a perfectionist. Lemons can be both refreshing and intense, often giving constructive criticism to help others improve.",
    traits: [
      "Lemons are detail-oriented and strive for excellence in everything they do.",
      "They don't shy away from expressing their opinions or standing up for what they believe in."
    ],
    fact: "",
    fruitiness: [1, 2, 5]
  }
};
const css = {
  code: "p.svelte-f25sd3,li.svelte-f25sd3{font-size:14px}li.svelte-f25sd3{text-align:left;margin-bottom:12px}h2.svelte-f25sd3{font-size:18px}.profile.svelte-f25sd3{text-align:center}.img.svelte-f25sd3{width:240px;height:240px;border-radius:8px;background-color:rgb(255, 200, 150)}",
  map: '{"version":3,"file":"FruitProfile.svelte","sources":["FruitProfile.svelte"],"sourcesContent":["<script>\\r\\n  import { base } from \\"$app/paths\\";\\r\\n  import { profiles } from \\"$lib/data/profiles.js\\";\\r\\n\\r\\n  export let fruit;\\r\\n  const fruits = [\\r\\n    \\"avocado\\",\\r\\n    \\"blueberry\\",\\r\\n    \\"peach\\",\\r\\n    \\"grapes\\",\\r\\n    \\"banana\\",\\r\\n    \\"mango\\",\\r\\n    \\"orange\\",\\r\\n    \\"lemon\\",\\r\\n  ];\\r\\n  const emojis = [\\"🥑\\", \\"🫐\\", \\"🍑\\", \\"🍇\\", \\"🍌\\", \\"🥭\\", \\"🍊\\", \\"🍋\\"];\\r\\n  const symbol = emojis[fruits.indexOf(fruit)];\\r\\n\\r\\n  $: profile = profiles[fruit];\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"profile\\">\\r\\n  <h1>{profile.name}</h1>\\r\\n  <div style=\\"display: flex; flex-direction: row; flex-wrap: wrap; gap: 12px;\\">\\r\\n    <!-- <div class=\\"img\\"></div> -->\\r\\n    <img src={`${base}/images/${fruit}.jpg`} alt=\\"fruit\\" class=\\"img\\" />\\r\\n    <div class=\\"fruitiness\\">\\r\\n      <h2>Fruitiness</h2>\\r\\n      <ul>\\r\\n        <li>\\r\\n          <div>Fruity Flavor</div>\\r\\n          <div>\\r\\n            {#each Array(profile.fruitiness[0]) as _, i}{symbol}{/each}\\r\\n          </div>\\r\\n        </li>\\r\\n        <li>\\r\\n          <div>Core Strength</div>\\r\\n          <div>\\r\\n            {#each Array(profile.fruitiness[1]) as _, i}{symbol}{/each}\\r\\n          </div>\\r\\n        </li>\\r\\n        <li>\\r\\n          <div>Zesty Nature</div>\\r\\n          <div>\\r\\n            {#each Array(profile.fruitiness[2]) as _, i}{symbol}{/each}\\r\\n          </div>\\r\\n        </li>\\r\\n      </ul>\\r\\n    </div>\\r\\n  </div>\\r\\n  <p>{profile.description}</p>\\r\\n  <div class=\\"traits\\">\\r\\n    <h2>Traits</h2>\\r\\n    <ul>\\r\\n      {#each profile.traits as trait}\\r\\n        <li>{trait}</li>\\r\\n      {/each}\\r\\n    </ul>\\r\\n  </div>\\r\\n  <h2>Fun Fact</h2>\\r\\n  <p>{profile.fact}</p>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  p,\\r\\n  li {\\r\\n    font-size: 14px;\\r\\n  }\\r\\n  li {\\r\\n    text-align: left;\\r\\n    margin-bottom: 12px;\\r\\n  }\\r\\n  h2 {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n  .profile {\\r\\n    text-align: center;\\r\\n  }\\r\\n  .img {\\r\\n    width: 240px;\\r\\n    height: 240px;\\r\\n    border-radius: 8px;\\r\\n    background-color: rgb(255, 200, 150);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgEE,eAAC,CACD,gBAAG,CACD,SAAS,CAAE,IACb,CACA,gBAAG,CACD,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CACA,gBAAG,CACD,SAAS,CAAE,IACb,CACA,sBAAS,CACP,UAAU,CAAE,MACd,CACA,kBAAK,CACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC"}'
};
const FruitProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let profile;
  let { fruit } = $$props;
  const fruits = [
    "avocado",
    "blueberry",
    "peach",
    "grapes",
    "banana",
    "mango",
    "orange",
    "lemon"
  ];
  const emojis = ["🥑", "🫐", "🍑", "🍇", "🍌", "🥭", "🍊", "🍋"];
  const symbol = emojis[fruits.indexOf(fruit)];
  if ($$props.fruit === void 0 && $$bindings.fruit && fruit !== void 0) $$bindings.fruit(fruit);
  $$result.css.add(css);
  profile = profiles[fruit];
  return `<div class="profile svelte-f25sd3"><h1>${escape(profile.name)}</h1> <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 12px;"> <img${add_attribute("src", `${base}/images/${fruit}.jpg`, 0)} alt="fruit" class="img svelte-f25sd3"> <div class="fruitiness"><h2 class="svelte-f25sd3" data-svelte-h="svelte-utv6vg">Fruitiness</h2> <ul><li class="svelte-f25sd3"><div data-svelte-h="svelte-239c9p">Fruity Flavor</div> <div>${each(Array(profile.fruitiness[0]), (_, i) => {
    return `${escape(symbol)}`;
  })}</div></li> <li class="svelte-f25sd3"><div data-svelte-h="svelte-dgc2k2">Core Strength</div> <div>${each(Array(profile.fruitiness[1]), (_, i) => {
    return `${escape(symbol)}`;
  })}</div></li> <li class="svelte-f25sd3"><div data-svelte-h="svelte-3vmyeg">Zesty Nature</div> <div>${each(Array(profile.fruitiness[2]), (_, i) => {
    return `${escape(symbol)}`;
  })}</div></li></ul></div></div> <p class="svelte-f25sd3">${escape(profile.description)}</p> <div class="traits"><h2 class="svelte-f25sd3" data-svelte-h="svelte-rgzovv">Traits</h2> <ul>${each(profile.traits, (trait) => {
    return `<li class="svelte-f25sd3">${escape(trait)}</li>`;
  })}</ul></div> <h2 class="svelte-f25sd3" data-svelte-h="svelte-6rfqu3">Fun Fact</h2> <p class="svelte-f25sd3">${escape(profile.fact)}</p> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $selectedProfile, $$unsubscribe_selectedProfile;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_selectedProfile = subscribe(selectedProfile, (value) => $selectedProfile = value);
  set_store_value(selectedProfile, $selectedProfile = $page.params.fruit, $selectedProfile);
  $$unsubscribe_page();
  $$unsubscribe_selectedProfile();
  return `${validate_component(FruitProfile, "FruitProfile").$$render($$result, { fruit: $page.params.fruit }, {}, {})}`;
});
export {
  Page as default
};
