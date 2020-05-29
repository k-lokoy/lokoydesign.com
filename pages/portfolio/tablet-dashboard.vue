<template>
  <div class="tablet-dashboard">
    <h1>Tablet Dashboard</h1>

    <p v-if="language == 'no'">Et dashbord for nettbrett.</p>
    <p v-else>A dashboard for tablets.</p>

    <img src="~assets/portfolio/tablet-dashboard/tablet_dashboard.jpg">

    <h3 v-if="language == 'no'">Om dette prosjektet</h3>
    <h3 v-else>About this project</h3>

    <div v-if="language == 'no'">
      <p>Dette er et dashbord laget for å gi ny nytte til gamle nettbrett.</p>
      <p>Den kjører på en local maskin og blir vist på nettbrettet via en nettleser.</p>

    </div>
    <div v-else>
      <p>This is a dashboard made to give new use to old tablets.</p>
      <p>It runs on a local machine and can be shows on a tablet through a browser.</p>
    </div>

    <h3 v-if="language == 'no'">Teknologier brukt i dette prosjektet</h3>
    <h3 v-else>Technologies used in this project</h3>
  
    <ul>
      <li>Node JS</li>
      <li>Express JS</li>
      <li>Vue JS</li>
      <li>CSS/SASS</li>
      <li>Babel JS</li>
    </ul>

    <GHLink href="https://github.com/lokoydesign/tablet-dashboard"></GHLink>
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