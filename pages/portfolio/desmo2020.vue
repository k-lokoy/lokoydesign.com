<template>
  <div class="desmo2020">
    <h1>Desmo2020</h1>

    <p v-if="language == 'no'">Spesialtilpasset WordPress tema</p>
    <p v-else>Custom WordPress theme</p>

    <Slideshow count="3">
      <img src="~assets/portfolio/desmo2020/desmo2020_screenshot_001.jpg" />
      <img src="~assets/portfolio/desmo2020/desmo2020_screenshot_002.jpg" />
      <img src="~assets/portfolio/desmo2020/desmo2020_screenshot_003.jpg" />
    </Slideshow>

    <h3 v-if="language == 'no'">Om dette prosjektet</h3>
    <h3 v-else>About this project</h3>

    <div v-if="language == 'no'">
      <p>Desmo2020 er et <a href="http://wordpress.org" target="_blank">WordPress</a> tema spesialtilpasset whippet oppdretteren <a href="http://brilliant-pearl.com" target="_blank">Brilliant-Pearl</a>.</p>
      <p>Det har ikke alle funksjonene som et standard WordPress tema, men ble mer laget med tanke på Brilliant-Pearls behov.</p>
    </div>
    <div v-else>
      <p>Desmo2020 is a custom <a href="http://wordpress.org" target="_blank">WordPress</a> theme made for <a href="http://brilliant-pearl.com" target="_blank">Brilliant-Pearl</a>, a whippet breeder based in Norway.</p>
      <p>It doesn't have all the features of a standard WordPress theme, but was made tailored for Brilliant-Pearl's needs.</p>
    </div>

    <h3 v-if="language == 'no'">Teknologier brukt i dette prosjektet</h3>
    <h3 v-else>Technologies used in this project</h3>

    <ul>
      <li>WordPress</li>
      <li>PHP</li>
      <li>Javascript</li>
      <li>CSS3/SASS</li>
      <li>Gulp</li>
    </ul>

    <GHLink href="https://github.com/lokoydesign/desmo2020"></GHLink>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Slideshow from "~/components/Slideshow.vue"
  import GHLink    from "~/components/GHLink.vue"

  export default {
    components: {Slideshow, GHLink},

    computed: mapState([
      "language"
    ])
  }
</script>

<style scoped>
  .screenshots {
    display: grid;
    grid-gap: 16px;
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }

  @media (min-width: 1200px) {
    .screenshots {
      grid-template-columns: 1fr 1fr;

      > * {
        grid-column: 1 / 3;
      }
    }

    #desmo2020-screenshot-002 {
      grid-column: 1 / 2;
    }

    #desmo2020-screenshot-003 {
      grid-column: 2 / 3;
    }
  }
</style>