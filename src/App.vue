<template>
  <div id="app">
    <navbar></navbar>
    <vue-page-transition name="fade-in-right" class="content">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
   components: {
      Navbar: () => import('@/components/Navbar.vue')
   }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');
@import url('https://fonts.googleapis.com/css?family=Monoton');
@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great');
@import url('https://fonts.googleapis.com/css?family=Leckerli+One');
@import url('https://fonts.googleapis.com/css?family=Sen');

#app {
  font-family: 'Varela Round';
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: left;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

hr{
  background: #3D529C;
}

h1, h2, h3, h4, h5, h6, p, span{
  cursor: default;
  font-family: 'Sen';
}

body{
  background: #374785;
}

#nprogress .bar {
  background: rgb(255, 255, 255) !important;
  /* box-shadow: none !important; */
}
</style>
