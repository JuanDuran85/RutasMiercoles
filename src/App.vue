<template>
  <div id="app">
    <div id="nav">
      <ul>
        <router-link tag="li" to="/">Home</router-link>
        <router-link class="router-link-exact-active" tag="li" to="/about">About</router-link>
        <router-link tag="li" :to="{name: 'Usuarios'}">Usuarios</router-link>
        <router-link tag="li" :to="{name: 'Dinamico', params: {n1: '3', n2: '5'}}">Dinamico</router-link>
        <router-link tag="li" :to="{name: 'Servicio'}">Servicio</router-link>
      </ul>
    </div>
    <transition name="slide-fade">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <transition-group name="slide-fade">
        <router-view :key="2" name="a"></router-view>
        <router-view :key="3" name="b"></router-view>  
    </transition-group>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a,  #nav li {
  cursor: pointer;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
