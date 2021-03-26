require('./bootstrap');

window.Vue = require('vue').default;

import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.mixin({ methods: { route }});
Vue.use(plugin)
Vue.use(Vuetify)

const el = document.getElementById('app')

new Vue({
    vuetify: new Vuetify({
        theme: { dark: true }
    }),
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)
