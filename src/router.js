// Aquí definimos las diferentes rutas que se van a corresponder con los diferentes componentes.

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router)

// .use es una función que nos permite instalar plugins o utilidades que tiene la libreria.
// Recuerda que Vue es un framework progresivo y es la funcionalidad de USE con la que podemos progresas,
// agregar funcionalidades, escalar requerimientos a medida que tengamos que resolver cosas más complejas.

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})

// Cada ruta va a ser representada a través de un objeto. Los comandos esenciales para cada ruta son path, name y component.

// Fetch es una funcionalidad relativamente nueva que disponen los browsers para poder hacer interacciones HTTP con servidores o con APIs.
// La vamos a utilizar de manera nativa sin librerias, ya que tiene un soporte bastante amplío para todos los navegadores.
