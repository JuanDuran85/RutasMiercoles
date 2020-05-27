<template>
  <div>
      <h1>Dinamico</h1>
      <p>Suma: {{resultado}}</p>
  </div>
</template>

<script>
export default {
    name: 'Dinamico',
    props: ['resultado'],
    beforeRouteLeave (to, from, next) {
        const answer = confirm('Se quiere ir...!!!')
            if (answer) {
                next()
            } else {
                next(false)
            }
    }
}
</script>

<style>

</style>