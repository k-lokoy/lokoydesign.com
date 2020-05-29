<template>
  <div class="portfolio">
    <h1>{{this.$store.state.language == 'no' ? 'Portefolie' : 'Portfolio'}}</h1>

    <div class="grid">
      <nuxt-link class="item" to="portfolio/tablet-dashboard">
        <img src="~/assets/portfolio/tablet-dashboard/tablet_dashboard.jpg">
        <div>
          <h3>Tablet Dashboard</h3>
          <div class="tags">
            <span>JS</span>
            <span>Express</span>
            <span>Vue</span>
            <span>Babel</span>
            <span>Sass</span>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link class="item" to="portfolio/hovmesteren">
        <img src="~/assets/portfolio/hovmesteren/banner.jpg">
        <div>
          <h3>Hovmesteren</h3>
          <div class="tags">
            <span>NodeJS</span>
            <span>Discord</span>
            <span>Babel</span>
            <span>Gulp</span>
            <span>Mocha</span>
            <span>Sinon</span>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link class="item" to="portfolio/the-olsen-gang-posters">
        <img class="portrait" src="~/assets/portfolio/the-olsen-gang-posters/the-olsen-gang_towards-new-heights.jpg">
        <div>
          <h3>The Olsen Gang posters</h3>
          <div class="tags">
            <span>Graphic design</span>
            <span>Vector graphics</span>
            <span>Adobe illustrator</span>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link class="item" to="portfolio/jigsaw">
        <img src="~/assets/portfolio/jigsaw/screenshot.jpg">
        <div>
          <h3>Jigsaw</h3>
          <div class="tags">
            <span>HTML Canvas</span>
            <span>JS</span>
            <span>CSS</span>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link class="item" to="portfolio/desmo2020">
        <img src="~/assets/portfolio/desmo2020/desmo2020_screenshot_001.jpg">
        <div>
          <h3>Desmo2020</h3>
          <div class="tags">
            <span>WordPress</span>
            <span>PHP</span>
            <span>JS</span>
            <span>CSS</span>
            <span>SASS</span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-gap: 16px;
  }

  .item {
    position: relative;
    background-color: #222;
    color: var(--color-gray);
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
  }

  .item::before {
    content: '';
    display: block;
    padding-bottom: calc(9/16 * 100%);
  }

  .item:hover > div,
  .item:focus > div {
    opacity: 1;
  }

  .item  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    align-content: center;
    grid-gap: 4px;
  }

  .item > img {
    width: 100%;
    height: auto;
    bottom: 0;
    margin: auto;
  }

  .item > img.portrait {
    height: 120%;
    width: auto;
    left: 0;
    right: 0;
  }

  .item > div {
    opacity: 0;
    z-index: 10;
    transition: opacity .3s ease-in-out;
  }

  .item > div::after {
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: var(--color-blue);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    color: var(--color-blue);
    font-size: .5rem;
    font-weight: 600;
  }

  .tags > * {
    background-color: var(--color-gray);
    padding: 4px;
    border-radius: 2px;
  }

  .tags > *:not(:last-child) {
    margin: 0 4px 0px 0;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>