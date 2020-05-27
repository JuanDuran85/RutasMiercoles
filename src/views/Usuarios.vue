<template>
    <div>
        <h1>Usuarios</h1>
    </div>
</template>

<script>
export default {
    name: 'Usuarios',
    mounted() {
        setTimeout(()=>{
            this.$router.push('/');
        },4000);
    },
}
</script>

<style>

</style>