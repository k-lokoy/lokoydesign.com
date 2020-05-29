<template>
  <div class="the-olsen-gang-posters">
    <h1 v-if="language == 'no'">The Olsen Gang plakater</h1>
    <h1 v-else>The Olsen Gang posters</h1>

    <p v-if="language == 'no'">Minimaliske plakater basert på Olsenbanden filmene.</p>
    <p v-else>Minimalist poster designs based on the scandinavian Olsen Gang movies.</p>

    <div class="grid">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_operation-egon.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_and-dynamite-harry.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_take-gold.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_meets-the-king-and-the-jack.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_latest-businesses.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_go-full-music.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_and-dynamite-harry-on-the-tracks.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_and-computer-harry-blow-up-a-bank.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_towards-new-heights.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_never-gives-up.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_the-very-last-heist.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_were-not-dead.jpg">
      <img src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_the-last-sting.jpg">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      "language"
    ])
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-gap: 16px;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 32px;
    }
  }

  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>