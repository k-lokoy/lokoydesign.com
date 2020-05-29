<template>
  <div :class="`social-links${light ? ' light' : ''}`">
    <a href="https://www.github.com/lokoydesign" target="_blank" rel="noopener"><i class="fa fa-github"></i></a>
    <a href="https://www.instagram.com/lokoydesign" target="_blank" rel="noopener"><i class="fa fa-instagram"></i></a>
    <a href="mailto:kennethlokoy@gmail.com"><i class="fa fa-envelope"></i></a>
  </div>
</template>

<script>
  export default {
    props: ["light"]
  }
</script>

<style scoped>
  .social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, auto));
    justify-content: center;
    grid-gap: 16px;
    font-size: 30px;
  }

  .social-links.light a {
    color: var(--color-gray);
  }
</style>