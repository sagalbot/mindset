import Vue from 'vue'
import Router from 'vue-router'
import Quiz from './views/Quiz.vue'
import Results from './views/Results.vue'

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
    }
  ]
})
