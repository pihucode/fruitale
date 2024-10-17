<script>
  import { selectedProfile } from "$lib/stores/store.js";

  const pageStyles = {
    avocado: {
      pageBgColor: "rgb(184 223 142)",
      contentBgColor: "#f6ffc4",
      fontColor: "rgb(84 133 49)",
    },
    blueberry: {
      pageBgColor: "#8ea3df",
      contentBgColor: "#c4d9ff",
      fontColor: "#232464",
    },
    peach: {
      pageBgColor: "#df998e",
      contentBgColor: "#ffd2c4",
      fontColor: "#642331",
    },
    grapes: {
      pageBgColor: "#9a8edf",
      contentBgColor: "#c4cbff",
      fontColor: "#342364",
    },
    banana: {
      pageBgColor: "#ffe461",
      contentBgColor: "#fffac4",
      fontColor: "#996b22",
    },
    mango: {
      pageBgColor: "#f9b663",
      contentBgColor: "#ffe5c4",
      fontColor: "#642723",
    },
    orange: {
      pageBgColor: "#f1be2e",
      contentBgColor: "#fff0c4",
      fontColor: "#955b1e",
    },
    lemon: {
      pageBgColor: "#ffe461",
      contentBgColor: "#fffac4",
      fontColor: "#996b22",
    },
    default: {
      pageBgColor: "#f7d09b",
      contentBgColor: "bisque",
      fontColor: "rgb(100, 62, 35)",
    },
  };
</script>

<div
  class="page"
  style={`background-color: ${pageStyles[$selectedProfile].pageBgColor}; color: ${pageStyles[$selectedProfile].fontColor};`}
>
  <!-- <div class="header">header</div> -->
  <div
    class="content"
    style={`background-color: ${pageStyles[$selectedProfile].contentBgColor};`}
  >
    <slot></slot>
  </div>
  <div class="footer">fruiter 2024</div>
</div>

<style>
  @font-face {
    font-family: Kongtext;
    src: url("/fonts/kongtext.ttf");
  }

  .page {
    background-color: #f7d09b;
    font-family: Kongtext, "Courier New", Courier, monospace;
    color: rgb(100, 62, 35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
  }

  .content {
    max-width: 540px;
    border-radius: 8px;
    padding: 24px;
    margin: 24px;
    background-color: bisque;
    box-sizing: border-box;
  }

  .footer {
    font-size: 10px;
    opacity: 0.5;
    margin-bottom: 24px;
  }
</style>
