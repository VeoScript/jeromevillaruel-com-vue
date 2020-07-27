<template>

  <app-bar class="preventcopy">

    <nav-bar /> <!-- NAVIGATION BAR -->

    <vue-page-transition name="fade-in-right" class="content">

      <router-view />  <!-- DYNAMIC CONTENT LOADED -->

    </vue-page-transition>

    <foot-bar />  <!-- FOOTER BAR -->

    <back-to-top />  <!-- SCROLL UP -->

  </app-bar> <!-- APP BAR SLOT WITH id=app -->

</template>

<script>

export default {

   components: {
     
      AppBar: () => import('@/components/layouts/AppBar'),

      NavBar: () => import('@/components/layouts/Navbar'),

      BackToTop: () => import('@/components/BackToTop'),

      FootBar: () => import('@/components/layouts/FootBar')
      
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
@import url('https://fonts.googleapis.com/css?family=Gochi+Hand');
@import url('https://fonts.googleapis.com/css?family=Quando');
@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Righteous');

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

//For Preveting Text Copying
.preventcopy {
-webkit-touch-callout: none; //iOS Safari
-webkit-user-select: none; //Chrome/Safari/Opera
-khtml-user-select: none; //Konqueror
-moz-user-select: none; //Firefox
-ms-user-select: none; //Internet Explorer/Edge
user-select: none; //Non-prefixed version, currently not supported by any browser
}

//For ScrollBar 
::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  border: 7px solid #272727;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb {
  background-color: #ECAB44;
  border-radius: 50px;
}

hr{
  background: #3D529C;
}

h1, h2, h3, h4, h5, h6, p, span, li, i{
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
