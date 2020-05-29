<template>
  <div class="wrapper">
    <Sidebar />
    <nuxt class="content" />
    <Footer />
  </div>
</template>

<script>
  import Sidebar from "~/components/Sidebar"
  import Footer  from "~/components/Footer"

  export default {
    components: {
      Sidebar,
      Footer
    }
  }
</script>

<style>
  :root {
    --color-black: #414042;
    --color-gray: #E6E7E8;
    --color-blue: #2B4160;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--color-gray);
    color: var(--color-black);
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    word-break: break-word;
  }

  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .content {
    padding: 16px;
  }

  a {
    color: var(--color-blue);
    text-decoration: underline;
  }

  ul {
    padding: 0 1.4em;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  
  .content > *:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    html,
    body,
    #__nuxt,
    #__layout,
    .wrapper {
      height: 100%;
    }

    .wrapper {
      grid-template-columns: 280px 1fr;
      grid-template-rows: 1fr minmax(50px, auto);
    }

    .content {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      overflow-y: auto;
      padding: 32px;
    }
  }
</style>
