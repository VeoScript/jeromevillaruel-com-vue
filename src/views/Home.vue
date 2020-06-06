<template>
  <div class="home">
    <jumbotron />
    <foot-bar/>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    Jumbotron: () => import('@/components/Jumbotron.vue'),
    FootBar: () => import('@/components/FootBar.vue')
  }
}
</script>
