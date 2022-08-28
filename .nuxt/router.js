import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _577688c2 = () => interopDefault(import('../pages/best.vue' /* webpackChunkName: "pages/best" */))
const _749d468e = () => interopDefault(import('../pages/content.vue' /* webpackChunkName: "pages/content" */))
const _039fe4be = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _d7cb07b2 = () => interopDefault(import('../pages/my.vue' /* webpackChunkName: "pages/my" */))
const _d332f884 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _9e6266ba = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _8692bfda = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _504fff16 = () => interopDefault(import('../pages/user/minthing.vue' /* webpackChunkName: "pages/user/minthing" */))
const _39f841a7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/best",
    component: _577688c2,
    name: "best"
  }, {
    path: "/content",
    component: _749d468e,
    name: "content"
  }, {
    path: "/login",
    component: _039fe4be,
    name: "login"
  }, {
    path: "/my",
    component: _d7cb07b2,
    name: "my"
  }, {
    path: "/profile",
    component: _d332f884,
    name: "profile"
  }, {
    path: "/search",
    component: _9e6266ba,
    name: "search"
  }, {
    path: "/signup",
    component: _8692bfda,
    name: "signup"
  }, {
    path: "/user/minthing",
    component: _504fff16,
    name: "user-minthing"
  }, {
    path: "/",
    component: _39f841a7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
