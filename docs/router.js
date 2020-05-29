import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4122a93d = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _279a8dd9 = () => interopDefault(import('../pages/portfolio/desmo2020.vue' /* webpackChunkName: "pages/portfolio/desmo2020" */))
const _09974172 = () => interopDefault(import('../pages/portfolio/hovmesteren.vue' /* webpackChunkName: "pages/portfolio/hovmesteren" */))
const _fe5dc6f0 = () => interopDefault(import('../pages/portfolio/jigsaw.vue' /* webpackChunkName: "pages/portfolio/jigsaw" */))
const _5a676fd4 = () => interopDefault(import('../pages/portfolio/tablet-dashboard.vue' /* webpackChunkName: "pages/portfolio/tablet-dashboard" */))
const _c702dc86 = () => interopDefault(import('../pages/portfolio/the-olsen-gang-posters.vue' /* webpackChunkName: "pages/portfolio/the-olsen-gang-posters" */))
const _60da8402 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4122a93d,
    name: "about"
  }, {
    path: "/portfolio/desmo2020",
    component: _279a8dd9,
    name: "portfolio-desmo2020"
  }, {
    path: "/portfolio/hovmesteren",
    component: _09974172,
    name: "portfolio-hovmesteren"
  }, {
    path: "/portfolio/jigsaw",
    component: _fe5dc6f0,
    name: "portfolio-jigsaw"
  }, {
    path: "/portfolio/tablet-dashboard",
    component: _5a676fd4,
    name: "portfolio-tablet-dashboard"
  }, {
    path: "/portfolio/the-olsen-gang-posters",
    component: _c702dc86,
    name: "portfolio-the-olsen-gang-posters"
  }, {
    path: "/",
    component: _60da8402,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
