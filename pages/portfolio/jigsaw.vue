<template>
  <div class="jigsaw">
    <h1>Jigsaw</h1>

    <p v-if="language == 'no'">Et lite puslespill.</p>
    <p v-else>Small jigsaw puzzle.</p>

    <img src="~assets/portfolio/jigsaw/screenshot.jpg" alt="Jigsaw screenshot">

    <h3 v-if="language == 'no'">Om dette prosjektet</h3>
    <h3 v-else>About this project</h3>

    <p v-if="language == 'no'">Dette er et litle puslespill laged med HTML5 canvas.</p>
    <p v-else>This is a small jigsaw game made with the HTML5 canvas.</p>

    <p v-if="language == 'no'">Prøv det her <b><a href="https://lokoydesign.com/Jigsaw/" target="_blank">https://lokoydesign.com/Jigsaw/</a></b></p>
    <p v-else>Try it out over at <b><a href="https://lokoydesign.com/Jigsaw/" target="_blank">https://lokoydesign.com/Jigsaw/</a></b></p>

    <br />

    <h3 v-if="language == 'no'">Teknologier brukt i dette prosjektet</h3>
    <h3 v-else>Technologies used in this project</h3>

    <ul>
      <li>HTML5 canvas</li>
      <li>Javascript</li>
      <li>CSS</li>
    </ul>

    <GHLink href="https://github.com/lokoydesign/Jigsaw"></GHLink>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import GHLink from "~/components/GHLink.vue"

  export default {
    components: {GHLink},

    computed: mapState([
      "language"
    ])
  }
</script>