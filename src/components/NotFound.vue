<template>
  <div class="notfound">
    <navbar></navbar>
    <h1 class="nf text-center mt-5">404 Not Found</h1>
    <h2 class="nf2 text-center">This page is unknown</h2>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    navbar: Navbar
  }
}
</script>
  
<style>
  .nf{
    color: #fff;
    font-weight: bolder;
  }

  .nf2{
    color: #9EAAD8;
    font-weight: bolder;
  }
</style>