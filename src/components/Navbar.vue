<template>
  <div>
    <b-navbar toggleable="lg" id="navigationbar" type="dark">
      <b-navbar-brand href="#">veoscript.official</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-5">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/About" class="nav-link">About</router-link>
          <router-link to="/" class="nav-link">Education</router-link>
          <router-link to="/" class="nav-link">Projects</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #navigationbar{
    background: #495dac;
    padding: 20px;
  }
  
  #navigationbar .navbar-brand{
    font-family: "Arial Black";
    font-weight: bolder;
    color: #F7E9A0;
  }
</style>