<template>
  <div class="home">
    <navbar></navbar>
    <jumbotron></jumbotron>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    navbar: () => import('@/components/Navbar.vue'),
    jumbotron: () => import('@/components/Jumbotron.vue')
  }
}
</script>
