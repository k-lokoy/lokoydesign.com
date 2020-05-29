<template>
  <div class="sidebar">
    <div class="logo">
      <img class="logo-big"  src="~/assets/branding/ld_logo_gray.png">
      <img class="logo-wide" src="~/assets/branding/ld_logo_gray_wide.png">
    </div>

    <div :class="`menu-toggle ${menuVisible ? 'toggled' : ''}`" @click="toggleMenu">
      <span></span>
    </div>

    <ul :class="`menu ${menuVisible ? 'visible' : ''}`">
      <nuxt-link to="/"     >{{this.$store.state.language == 'no' ? 'Portefolie' : 'Portfolio'}}</nuxt-link>
      <nuxt-link to="/about">{{this.$store.state.language == 'no' ? 'Om'         : 'About'}}</nuxt-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        menuVisible: false
      }
    },

    methods: {
      toggleMenu: function() {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    display: grid;
    grid-template-columns: 1fr 30px;
    background-color: var(--color-blue);
    color: var(--color-gray);
    font-size: 20px;
    align-content: start;
    padding: 16px;
  }

  a {
   color: var(--color-gray);
   text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .logo img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  .logo-big {
    display: none;
  }

  .menu-toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    overflow: hidden;
    align-self: center;
  }

  .menu-toggle span,
  .menu-toggle span::before,
  .menu-toggle span::after {
    background: var(--color-gray);
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    transition: all .3s ease-in-out;
  }

  .menu-toggle span {
    top: -1px;
    bottom: 0px;
    margin: auto;
  }

  .menu-toggle span::before,
  .menu-toggle span::after {
    content: '';
  }

  .menu-toggle span::before {
    top: -9px;
  }
    
  .menu-toggle span::after {
    bottom: -9px;
  }

  .menu-toggle.toggled span {
    left: 30px;
  }

  .menu-toggle.toggled span::before,
  .menu-toggle.toggled span::after {
    left: -30px;
    top: 0;
  }

  .menu-toggle.toggled span::before {
    transform: rotate(45deg);
  }

  .menu-toggle.toggled span::after {
    transform: rotate(-45deg);
  }

  .menu {
    display: grid;
    grid-gap: 24px;
    text-align: center;
    grid-column: 1 / 3;
    max-height: 0;
    overflow: hidden;
    transition: .3s ease-in-out;
    align-content: start;
  }

  .menu li {
    list-style: none;
  }

  .menu.visible {
    max-height: 100vh;
    padding: 32px 0 16px;
  }

  @media (min-width: 768px) {
    .sidebar {
      grid-template-columns: 150px minmax(0, 1fr);
    }

    .menu-toggle {
      display: none;
    }

    .menu {
      grid-column: 2 / 3;
      max-height: 100vh;
      grid-template-columns: repeat(auto-fit, minmax(0, auto));
      justify-content: end;
      align-content: end;
    }
  }

  @media (min-width: 1024px) {
    .sidebar {
      grid-gap: 32px;
      font-size: 22px;
    }

    .logo {
      display: grid;
      grid-column: 1 / 3;
      justify-content: center;
      margin-top: 16px;
    }

    .logo-big {
      display: block;
    }

    .logo-wide {
      display: none;
    }

    .menu {
      grid-template-columns: 1fr;
      grid-column: 1 / 3;
    }
  }

</style>