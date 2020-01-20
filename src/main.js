import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//views
import VSampleGraph from './views/v-sample-graph/v-sample-graph.vue'
import VSampleTable from './views/v-sample-table/v-sample-table.vue'
import VSampleForm from './views/v-sample-form/v-sample-form.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: VSampleGraph },
	{ path: '/table', component: VSampleTable },
	{ path: '/insert', component: VSampleForm },
	{ path: '/:deafult', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
