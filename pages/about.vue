<template>
  <div class="about" v-if="this.$store.state.language == 'no'">
    <div class="about-inner">
      <h1>Om</h1>
      
      <p>Hei, mitt navn er Kenneth.</p>
      
      <br />

      <p>På denne nettsiden finner du en samling av ting jeg har laget.</p>
      <p>Mine ferdigheter inkluderer grafisk design, UI/UX design, logo design, programmering og systemadministrasjon.</p>
      <p>Jeg er selvlært på de fleste av disse, og håper de inspirerer deg til å forfølge dine egne lidenskaper.</p>      
      
      <br />

      <SocialLinks class="social-links"></SocialLinks>
    </div>
  </div>

  <div class="about" v-else>
    <div class="about-inner">
      <h1>About</h1>
      
      <p>Hi, I'm Kenneth.</p>
      
      <br />
      
      <p>On this website you'll find a collection of things I've made.</p>
      <p>My skills ranges anywhere from graphic, UI/UX and logo design to programming and system administration.</p>
      <p>I am self taught at most of these and hope they inspire you to persue your own passions.</p>
      
      <br />

      <SocialLinks class="social-links"></SocialLinks>
    </div>
  </div>
</template>

<script>
  import SocialLinks from "~/components/SocialLinks"

  export default {
    components: {SocialLinks}
  }
</script>

<style scoped>
  .about {
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 20px;
  }

  .about-inner {    
    text-align: center;
  }

  h1 {
    color: var(--color-blue);
    margin-bottom: 32px;
  }

  .social-links a {
    color: red !important;
  }
</style>