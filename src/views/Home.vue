<template>
  <div class="home">
    <jumbotron></jumbotron>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    jumbotron: () => import('@/components/Jumbotron.vue')
  }
}
</script>
