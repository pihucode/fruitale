import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/ssr.js";
import { s as selectedProfile } from "../../chunks/store.js";
const css = {
  code: '@font-face{font-family:Kongtext;src:url("/fonts/kongtext.ttf")}.page.svelte-6zkd39{background-color:#f7d09b;font-family:Kongtext, "Courier New", Courier, monospace;color:rgb(100, 62, 35);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;min-width:100vw}.content.svelte-6zkd39{max-width:540px;border-radius:8px;padding:24px;margin:24px;background-color:bisque;box-sizing:border-box}.footer.svelte-6zkd39{font-size:10px;margin-bottom:24px}',
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n  import { selectedProfile } from \\"$lib/stores/store.js\\";\\r\\n\\r\\n  const pageStyles = {\\r\\n    avocado: {\\r\\n      pageBgColor: \\"rgb(184 223 142)\\",\\r\\n      contentBgColor: \\"#f6ffc4\\",\\r\\n      fontColor: \\"rgb(84 133 49)\\",\\r\\n    },\\r\\n    blueberry: {\\r\\n      pageBgColor: \\"#8ea3df\\",\\r\\n      contentBgColor: \\"#c4d9ff\\",\\r\\n      fontColor: \\"#232464\\",\\r\\n    },\\r\\n    peach: {\\r\\n      pageBgColor: \\"#df998e\\",\\r\\n      contentBgColor: \\"#ffd2c4\\",\\r\\n      fontColor: \\"#642331\\",\\r\\n    },\\r\\n    grapes: {\\r\\n      pageBgColor: \\"#9a8edf\\",\\r\\n      contentBgColor: \\"#c4cbff\\",\\r\\n      fontColor: \\"#342364\\",\\r\\n    },\\r\\n    banana: {\\r\\n      pageBgColor: \\"#ffe461\\",\\r\\n      contentBgColor: \\"#fffac4\\",\\r\\n      fontColor: \\"#996b22\\",\\r\\n    },\\r\\n    mango: {\\r\\n      pageBgColor: \\"#f9b663\\",\\r\\n      contentBgColor: \\"#ffe5c4\\",\\r\\n      fontColor: \\"#642723\\",\\r\\n    },\\r\\n    orange: {\\r\\n      pageBgColor: \\"#f1be2e\\",\\r\\n      contentBgColor: \\"#fff0c4\\",\\r\\n      fontColor: \\"#955b1e\\",\\r\\n    },\\r\\n    lemon: {\\r\\n      pageBgColor: \\"#ffe461\\",\\r\\n      contentBgColor: \\"#fffac4\\",\\r\\n      fontColor: \\"#996b22\\",\\r\\n    },\\r\\n    default: {\\r\\n      pageBgColor: \\"#f7d09b\\",\\r\\n      contentBgColor: \\"bisque\\",\\r\\n      fontColor: \\"rgb(100, 62, 35)\\",\\r\\n    },\\r\\n  };\\r\\n<\/script>\\r\\n\\r\\n<div\\r\\n  class=\\"page\\"\\r\\n  style={`background-color: ${pageStyles[$selectedProfile].pageBgColor}; color: ${pageStyles[$selectedProfile].fontColor};`}\\r\\n>\\r\\n  <!-- <div class=\\"header\\">header</div> -->\\r\\n  <div\\r\\n    class=\\"content\\"\\r\\n    style={`background-color: ${pageStyles[$selectedProfile].contentBgColor};`}\\r\\n  >\\r\\n    <slot></slot>\\r\\n  </div>\\r\\n  <div class=\\"footer\\">fruiter 2024</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  @font-face {\\r\\n    font-family: Kongtext;\\r\\n    src: url(\\"/fonts/kongtext.ttf\\");\\r\\n  }\\r\\n\\r\\n  .page {\\r\\n    background-color: #f7d09b;\\r\\n    font-family: Kongtext, \\"Courier New\\", Courier, monospace;\\r\\n    color: rgb(100, 62, 35);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    min-height: 100vh;\\r\\n    min-width: 100vw;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    max-width: 540px;\\r\\n    border-radius: 8px;\\r\\n    padding: 24px;\\r\\n    margin: 24px;\\r\\n    background-color: bisque;\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n\\r\\n  .footer {\\r\\n    font-size: 10px;\\r\\n    margin-bottom: 24px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmEE,UAAW,CACT,WAAW,CAAE,QAAQ,CACrB,GAAG,CAAE,0BACP,CAEA,mBAAM,CACJ,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,QAAQ,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CACxD,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,KACb,CAEA,sBAAS,CACP,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,MAAM,CACxB,UAAU,CAAE,UACd,CAEA,qBAAQ,CACN,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProfile, $$unsubscribe_selectedProfile;
  $$unsubscribe_selectedProfile = subscribe(selectedProfile, (value) => $selectedProfile = value);
  const pageStyles = {
    avocado: {
      pageBgColor: "rgb(184 223 142)",
      contentBgColor: "#f6ffc4",
      fontColor: "rgb(84 133 49)"
    },
    blueberry: {
      pageBgColor: "#8ea3df",
      contentBgColor: "#c4d9ff",
      fontColor: "#232464"
    },
    peach: {
      pageBgColor: "#df998e",
      contentBgColor: "#ffd2c4",
      fontColor: "#642331"
    },
    grapes: {
      pageBgColor: "#9a8edf",
      contentBgColor: "#c4cbff",
      fontColor: "#342364"
    },
    banana: {
      pageBgColor: "#ffe461",
      contentBgColor: "#fffac4",
      fontColor: "#996b22"
    },
    mango: {
      pageBgColor: "#f9b663",
      contentBgColor: "#ffe5c4",
      fontColor: "#642723"
    },
    orange: {
      pageBgColor: "#f1be2e",
      contentBgColor: "#fff0c4",
      fontColor: "#955b1e"
    },
    lemon: {
      pageBgColor: "#ffe461",
      contentBgColor: "#fffac4",
      fontColor: "#996b22"
    },
    default: {
      pageBgColor: "#f7d09b",
      contentBgColor: "bisque",
      fontColor: "rgb(100, 62, 35)"
    }
  };
  $$result.css.add(css);
  $$unsubscribe_selectedProfile();
  return `<div class="page svelte-6zkd39"${add_attribute("style", `background-color: ${pageStyles[$selectedProfile].pageBgColor}; color: ${pageStyles[$selectedProfile].fontColor};`, 0)}> <div class="content svelte-6zkd39"${add_attribute("style", `background-color: ${pageStyles[$selectedProfile].contentBgColor};`, 0)}>${slots.default ? slots.default({}) : ``}</div> <div class="footer svelte-6zkd39" data-svelte-h="svelte-hdappr">fruiter 2024</div> </div>`;
});
export {
  Layout as default
};
