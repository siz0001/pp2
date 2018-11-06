// Import Vue
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false



import * as VueGoogleMaps from 'vue2-google-maps';
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDKG-dso-1IbUbbG-osbZZF9ibe67M1jbU',
  },
});

// Import App Custom Styles
//import AppStyles from './assets/sass/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
