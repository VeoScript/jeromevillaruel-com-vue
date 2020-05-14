<template>
  <div>
    <b-jumbotron>
      <b-media right-left vertical-align="center">
        <template v-slot:aside>
          <b-img rounded="circle" width="80" alt="placeholder" src="https://pbs.twimg.com/profile_images/1251393038410113025/zVNYo7WQ_200x200.jpg"></b-img>
        </template>
        <h1 class="mt-0 mb-1" id="j-1">VEOSCRIPT</h1>
        <h4 class="mb-0" id="j-2">
          Information Technology, Web Developer and UX & UI Designer.
        </h4>
      </b-media>

      <hr class="my-4">

      <p>
        Subscribe and Follow me to all of my social media accounts for more info and projects.
      </p>

      <b-row>
        <b-col cols="sm-5">
          <b-input-group class="mb-3" prepend="Email">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button size="sm" text="Button" variant="danger">Subscribe</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <h3><b id="n-subscribers">0</b>&nbsp;Subscribers.</h3>
    </b-jumbotron>
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
    color: #F7E9A0;
  }

  #j-1{
    font-family: 'Arial Black';
    font-size: 30px;
    font-weight: bolder;
    color: #8cd3fa;
  }
</style>