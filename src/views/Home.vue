<template>
  <div class="home">
    <navbar></navbar>
    <jumbotron></jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Jumbotron from "@/components/Jumbotron.vue";

export default {
  name: "Home",
  components: {
    navbar: Navbar,
    jumbotron: Jumbotron
  }
}
</script>
