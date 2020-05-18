<template>
  <div>
    <b-jumbotron>
      <b-row class="justify-content-center text-center">
        <b-col cols="sm-12">
          <b-img rounded="circle" width="100" alt="placeholder" src="https://pbs.twimg.com/profile_images/1251393038410113025/zVNYo7WQ_200x200.jpg"></b-img>
          <h1 class="mt-0 mb-1" id="j-1">Villaruel Jerome</h1>
          <h4 class="mb-2" id="j-2">
            Information Technology, Web Developer and UX & UI Designer.
          </h4>
          <b-avatar href="https://facebook.com/veoscript" target="_blank" id="facebooklink" v-b-tooltip.hover title="Follow me on Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></b-avatar>&nbsp;
          <b-avatar href="https://twitter.com/VeoScript43" target="_blank" id="twitterlink" v-b-tooltip.hover title="Follow me on Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></b-avatar>&nbsp;
          <b-avatar href="https://github.com/VeoScript" target="_blank" id="githublink" v-b-tooltip.hover title="Follow me on Github and give a star for my repositories"><font-awesome-icon :icon="['fab', 'github']" /></b-avatar>&nbsp;

          <hr class="my-4">
        </b-col>

        <b-col cols="sm-12">
          <p class="text-center">
            Subscribe and Follow me to all of my social media accounts for more info and projects.
          </p>
        </b-col>
        <b-col cols="sm-4">
          <b-input-group class="mb-1" prepend="Email">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button size="sm" text="Button" variant="primary">Subscribe</b-button>
            </b-input-group-append>
          </b-input-group>
          <h3 class="text-center"><b id="n-subscribers">0</b>&nbsp;<small>Subscribers.</small></h3>
        </b-col>
      </b-row>
    </b-jumbotron>
    <p id="copyright-home">&copy;2020 Veoscript.Official, Personal Webpage. Powered by Vue JS.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .jumbotron{
    background: #24315E;
    border-radius: 0px;
    color: #A8D1E7;
  }

  #n-subscribers{
    color: #ECAB44;
  }

  #j-1{
    font-family: 'Arial Black';
    font-size: 30px;
    font-weight: bolder;
    color: #8cd3fa;
  }

  #facebooklink{
    background: #3f67b3;
  }

  #twitterlink{
    background: #1EACFF;
  }

  #instagramlink{
    background: #912EB9;
    color: #F6D371;
  }

  #githublink{
    background: #545B62;
  }

  #linkedinlink{
    background: #275380;
  }

  #copyright-home{
    font-size: 12px;
    color: #A8B3DB;
    text-align: center;
  }
</style>