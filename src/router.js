import Vue from 'vue'
import Router from 'vue-router'
import Quiz from './views/Quiz.vue'
import Results from './views/Results.vue'
import About from './views/About.vue'
import Import from './views/Import.vue'
import Export from './views/Export.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/import',
      name: 'import',
      component: Import
    },
    {
      path: '/export',
      name: 'export',
      component: Export
    }
  ]
})
