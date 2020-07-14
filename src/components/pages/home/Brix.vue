<template>
  <div class="mb-3">
    <b-container>
      <b-row class="justify-content-center text-center">
        <b-col sm="4">
          <h1 class="artist">ARTIST</h1>
        </b-col>
        <b-col sm="4">
          <h1 class="writer">SONG<br>WRITER</h1>
        </b-col>
        <b-col sm="4">
          <h1 class="rapper">RAPPER</h1>
        </b-col>
      </b-row>
      <b-row class="justify-content-center text-center">
        <b-col sm="12">
          <div class="xbtxt">
            Aside from being a Programmer I have also skills in music. <br>
            Year 2010 when I found myself that I know how to composed a song, <br>
            including my first composition <b>"Walang Iwanan"</b> this song was dedicated to my barkadas in elementary. <br>
            We sang that song when we performed it every event in our school, and that song was so famous those days. <br>
            From the year of 2012 I learned Piano by my own and created a song <b>"Hulmahan"</b>, <br>
            dedicated to those people who maked broken promises. <br>
            And now I'm continue making a songs in genre of Pop and Hiphop. <br>
            Kindly support me in Underground Music Industry.
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <hr class="hr2">
      <h2 class="ms mb-3">MY SONGS</h2>
      <b-card no-body id="card-about" class="overflow-hidden mt-2" style="max-width: 1000px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require('@/assets/photos/songs/limitado.jpg')" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="LIMITADO">
              <b-card-text>
                This song was all about problems, depressions, stress and our capacity as a human.
                The real world that control our life and the time was an illusion,
                that we need our life more than our wants and luxuries.
                <br>
                <br>
                Original Composition of Jerome Villaruel <br>
                Published on July 10, 2020 <br>
                Genre: POP / HIPHOP
                <hr>
                <b-button id="btngotogithub" href="https://www.youtube.com/watch?v=RzITyhDyZA0" variant="primary" target="_blank" size="sm">View on Youtube</b-button>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body id="card-about" class="overflow-hidden mt-2" style="max-width: 1000px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require('@/assets/photos/songs/mulat.jpg')" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="MULAT">
              <b-card-text>
                This song was all about fake news and the illusionist of the country (Philippines).
                There's a lot of hoaxes spreading around the world.
                We're suffering of false information and most people believes that was true and spread it to the any types of social media.
                <br>
                <br>
                Original Composition of Jerome Villaruel <br>
                Published on June 26, 2020 <br>
                Genre: POP / HIPHOP
                <hr>
                <b-button id="btngotogithub" href="https://www.youtube.com/watch?v=SkMMYNiikII" variant="primary" target="_blank" size="sm">View on Youtube</b-button>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<style>
  .artist{
    font-family: 'Righteous';
    font-size: 70px;
    color: #fff;
  }

  .rapper{
    font-family: 'Gochi Hand';
    font-size: 80px;
    color: #fff;
  }

  .writer{
    font-family: 'Quando';
    font-size: 50px;
    color: #fff;
  }

  .xbtxt{
    font-family: 'Nunito';
    font-size: 18px;
    color: #fff;
    margin-top: 15px;
    cursor: default;
  }

  #card-about{
    background: #20284D;
    color: #A8B3DB;
  }

  .hr2{
    background: #24315E;
    height: 5px;
    border-radius: 50px;
    opacity: 0.5;
    border: none;
  }

  .ms{
    color: #fff;
  }
</style>
