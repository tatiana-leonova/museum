<template>
  <div>
    <div
      class="ya-share2"
      data-curtain
      data-shape="round"
      data-size="l"
      data-color-scheme="whiteblack"
      data-more-button-type="short"
      data-services="vkontakte,twitter,facebook"
    ></div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        hid: "stripe",
        src: "https://yastatic.net/share2/share.js",
        defer: true,
      },
    ],
  },
};

// 'https://yastatic.net/share2/share.js'
</script>

<style lang="scss" scoped>
</style>
