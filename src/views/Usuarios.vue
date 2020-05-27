<template>
    <div>
        <h1>Usuarios</h1>
        <p>{{nombre}}</p>
    </div>
</template>

<script>
export default {
    name: 'Usuarios',
    props: ['nombre'],
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
/*         setTimeout(()=>{
            console.log("cambio en el mounted")
            this.$router.push('/about');
        },4000); */
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

<style>

</style>