<template>
  <div class="fixed-top top">
    <b-navbar toggleable="lg" id="navigationbar" type="dark">
      <b-navbar-brand route to="/">
        <!-- VEOSCRIPT<span class="subtitle">.official</span> -->
        <b-img class="ologo" fluid src="@/assets/photos/coverwhite.png" width="150"></b-img>
        </b-navbar-brand>

      <b-navbar-toggle target="collapse" @click="toggle = !toggle">
        <b-icon 
          :icon="toggle ? 'x' : 'list'">
        </b-icon>
      </b-navbar-toggle>

      <b-collapse v-model="toggle" is-nav>
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
  data: () => ({
    toggle: false
  })
}
</script>

<style>

  #navigationbar{
    background: #495dac;
    padding: 20px;
    box-shadow: 1px 1px #3D529C;
  }
  
  #navigationbar .navbar-brand{
    font-family: 'Monoton';
    color: #fff;
  }

  .subtitle{
    font-family: 'Sen';
    font-size: 12px;
    color: #dbdbdb;
    cursor: pointer;
  }
</style>
