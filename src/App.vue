<template lang="pug">
  #app.app
    CMainNav(v-bind="menu")
    main.app__content
      router-view
</template>

<script>

import CMainNav from './components/c-main-nav/c-main-nav.vue'

export default {
  name: 'app',
  components: {
    CMainNav
  },
  data () {
    return {
      menu: {
        title: 'Demo vue',
        links: [
          {
            href: '/',
            text: 'Ejemplo Gráfica'
          },
          {
            href: '/table',
            text: 'Ejemplo Tabla'
          },
          {
            href: '/insert',
            text: 'Añadir elemento a la tabla'
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" src="./global/main.styl">
</style>
