<template lang='pug'>
#app
  router-view
</template>

<script>
import faviconUrl from '@/assets/images/favicon.ico';

export default {
  metaInfo: {
    title: 'Governence Games', // set a title
    titleTemplate: '%s | DAO-vs-DAO',
    link: [
      { rel: 'shortcut icon', type: 'image/ico', href: faviconUrl },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display' },
    ],
  },
  mounted() {
    this.$store.dispatch('initializeMetamaskVuex');
  },
};
</script>

<style lang="less">
@import '~normalize.css';

html, body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  // background: lighten(@brand-color, 30%);
  // padding: @body-padding;
  padding: 0;
  @media @mq-small-only {
    padding: @body-padding-mobile;
  }
  transition: background-color .5s;

}

#app {
  font-family: @regular-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

// h1, h2 {
//   font-family: @fancy-font;
// }
h2 {
  font-weight: normal;
  font-size: 36px;
}
h3, .small-uppercase {
  font-size: 11px;
  font-weight: normal;
  text-transform: uppercase;
}


</style>
