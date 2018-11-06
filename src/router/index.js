import Vue from 'vue'
import Router from 'vue-router'
import Sharelist from '../components/Sharelist'
import Ranking from '../components/Ranking'
import Usermap from '../components/Usermap'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'sharelist',
      component: Sharelist
    },

    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },

    {
      path: '/usermap',
      name: 'usermap',
      component: Usermap
    }
    
  ]
})
