<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
      beforeCreate() {
        console.log("antes de crear")
    },
    created() {
        console.log("creado")
    },
    beforeMount() {
        console.log("antes de montar")
    },
    mounted() {
        console.log("montado")
    },
    beforeUpdate() {
        console.log("antes de actualizar")
    },
    updated() {
        console.log("actualizado")
    },
    beforeDestroy() {
        console.log("antes de destruir")
    },
    destroyed() {
        console.log("destruido")
    }
}
</script>
