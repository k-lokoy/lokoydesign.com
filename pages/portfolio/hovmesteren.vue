<template>
  <div class="hovmesteren">
    <h1>Hovmesteren</h1>

    <p v-if="language == 'no'">En liten Discord bot.</p>
    <p v-else>A little Discord bot.</p>

    <img src="~assets/portfolio/hovmesteren/screenshot.jpg">

    <h3 v-if="language == 'no'">Om dette prosjektet</h3>
    <h3 v-else>About this project</h3>

    <div v-if="language == 'no'">
      <p>Hovmesteren ern en liten Discord bot med er få hjelpsomme og gøye kommandoer.</p>
    </div>
    <div v-else>
      <p>Hovmesteren is a little discord bot with a fun helpful and fun commands.</p>
    </div>

    <h3 v-if="language == 'no'">Teknologier brukt i dette prosjektet</h3>
    <h3 v-else>Technologies used in this project</h3>
  
    <ul>
      <li>NodeJS</li>
      <li>Discord.js</li>
      <li>Moment.js</li>
      <li>weather-js</li>
      <li>wikijs</li>
      <li>Babel</li>
      <li>Gulp</li>
      <li>Mocha</li>
      <li>Sinon</li>
    </ul>

    <GHLink href="https://github.com/lokoydesign/hovmesteren"></GHLink>
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