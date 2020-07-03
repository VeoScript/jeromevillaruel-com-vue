<template>
  <div class="home">
    <jumbotron />
    <BackToTop/>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    Jumbotron: () => import('@/components/Jumbotron.vue'),
    BackToTop: () => import('@/components/BackToTop')
  }
}
</script>
