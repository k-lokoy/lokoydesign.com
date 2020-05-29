<template>
  <a v-if="this.$store.state.language == 'no'" class="gh-link" :href="href" target="_blank">Se på GitHub <i class="fa fa-github"></i></a>
  <a v-else class="gh-link" :href="href" target="_blank">View on GitHub <i class="fa fa-github"></i></a>
</template>

<script>
  export default {
    props: [
      "href"
    ]
  }
</script>

<style scoped>
  .gh-link {
    text-align: center;
    text-decoration: none;
    font-weight: 400;
    color: var(--color-blue);
  }
  
  .gh-link:hover {
    text-decoration: underline;
  }
</style>