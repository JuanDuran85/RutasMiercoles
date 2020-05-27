import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Usuarios from '../views/Usuarios.vue';
import Dinamico from '../views/Dinamico.vue';
import Usuario2 from '../views/Usuario2.vue';
import Usuario3 from '../views/Usuario3.vue';
import Servicio from '../views/Servicio.vue';


Vue.use(VueRouter)

function sumando(ruta) {
  return {
    resultado: (parseInt(ruta.params.n1) + parseInt(ruta.params.n2))
  }
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicio',
    name: 'Servicio',
    component: Servicio,
    beforeEnter: (to, from, next) => {
          if (confirm(`${from.path}. Se quiere ir de ${to.path}...!!!`)) {
              next()
          } else if (confirm(`Quieres ir a about`)) {
            next('/about')
          }else {
              next(false)
          }
    }
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    components: {
      default: Usuarios,
      a: Usuario2,
      b: Usuario3
    },
    props: true
  },
  {
    path: '/dinamico/:n1-:n2',
    name: 'Dinamico',
    component: Dinamico,
    props: sumando
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
