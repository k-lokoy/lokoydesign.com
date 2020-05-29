<template>
  <footer>
    <SocialLinks :light="true"></SocialLinks>
    
    <p>Lokøy Design © {{year}}</p>
    
    <div class="languages">
      <span v-if="this.$store.state.language != 'no'" @click="changeLanguage">Bytt til Norsk</span>
      <span v-if="this.$store.state.language == 'no'" @click="changeLanguage">Switch to English</span>
    </div>
  </footer>
</template>

<script>
  import SocialLinks from "./SocialLinks"
  
  export default {
    components: {SocialLinks},

    computed: {
      year: function() {
        const date = new Date()
        return date.getFullYear()
      }
    },

    methods: {
      changeLanguage: function() {
        this.$store.commit('toggle')
      }
    }
  }
</script>

<style scoped>
  footer {
    background-color: var(--color-blue);
    color: var(--color-gray);
    display: grid;
    text-align: center;
    grid-gap: 8px;
    align-items: end;
    align-content: end;
    padding: 16px;
  }

  a {
    color: var(--color-gray);
    text-decoration: none;
  }

  .languages span {
    cursor: pointer;
  }
</style>