<template>
  <div class="fixed-top top">
    <b-navbar toggleable="lg" id="navigationbar" type="dark">
      <b-navbar-brand href="/">VEOSCRIPT<span class="subtitle">.official</span></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-5">
          <router-link to="/" :class="$route.path == '/' ? 'nav-link active' : 'nav-link'">Home</router-link>
          <router-link to="/freedomwall" :class="$route.path == '/freedomwall' ? 'nav-link active' : 'nav-link'">Freedom Wall</router-link>
          <router-link to="/about" :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'">About</router-link>
          <router-link to="/education" :class="$route.path == '/education' ? 'nav-link active' : 'nav-link'">Education</router-link>
          <router-link to="/projects" :class="$route.path == '/projects' ? 'nav-link active' : 'nav-link'">Projects</router-link>
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
    font-family: Mr Grieves;
    font-weight: bolder;
    color: #fff;
  }

  .subtitle{
    font-family: 'Corbel';
    font-size: 12px;
    color: #dbdbdb;
    cursor: pointer;
  }
</style>
