<template>
  <div class="home">
    <jumbotron />
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    Jumbotron: () => import('@/components/pages/home/Jumbotron.vue')
  }
}
</script>
