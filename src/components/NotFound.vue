<template>
  <div class="notfound">
    <navbar></navbar>
    <b-container class="nf-container">
      <h1 class="nf text-center mt-5">404 Not Found</h1>
      <h2 class="nf2 text-center">This page is unknown</h2>
    </b-container>
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
  .nf-container{
    margin-top: 100px;
  }

  .nf{
    color: #fff;
    font-weight: bolder;
  }

  .nf2{
    color: #9EAAD8;
    font-weight: bolder;
  }
</style>