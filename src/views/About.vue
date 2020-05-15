<template>
  <div class="about">
    <navbar></navbar>
    <b-row class="mx-3 text-left">
      <b-col cols="sm-8" class="mt-3 mb-2">
        <b-card id="card-about">
          <b-card-text id="card-text">About Me</b-card-text>
          <hr>
          <b-row>
            <b-col cols="sm-6">
              <b-form-group label="First Name">
                <b-form-input id="card-text-input" value="Jerome Joseph" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Age">
                <b-form-input id="card-text-input" value="22" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Email">
                <b-form-input id="card-text-input" value="jeromevillaruel1998@gmail.com" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Civil Status">
                <b-form-input id="card-text-input" value="Single" disabled></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="sm-6">
              <b-form-group label="Last Name">
                <b-form-input id="card-text-input" value="Villaruel" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Birth Date">
                <b-form-input id="card-text-input" value="September 13, 1998" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Gender">
                <b-form-input id="card-text-input" value="Male" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Religion">
                <b-form-input id="card-text-input" value="Roman Catholic" disabled></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group label="Address">
                <b-form-input id="card-text-input" value="928 Bonifacio St. Brgy. Guerrero, Bato, Leyte, Philippines" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="Bio">
                <b-form-textarea id="card-text-input" rows="5" value="To say I dabble would be understatement, design is my passion. I have a range of skills in the creative fields specializing in user experience & user interface design, interactive design and front-end development. I love solving problems and creating beautiful functional work." disabled></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="sm-4" class="mt-3">
        <b-card id="card-about" no-body class="overflow-hidden mb-2" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col sm="6">
              <b-card-img src="https://pbs.twimg.com/media/EYCOxmtUwAA__Hz?format=jpg&name=medium" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col sm="6">
              <b-card-body title="Villaruel Jerome">
                <b-card-text>
                  @veoscript/contact<br>
                  -09753286466<br>
                  -09380044523<br>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card id="card-about" class="overflow-hidden" style="max-width: 540px;">
          <b-row>
            <b-col sm="12">
              <b-card-text id="card-text">Work Experience</b-card-text>
              <hr>
              <b-form-group label="IT Coordinator - Present">
                <b-form-input id="card-text-input" value="Specialty Pulp Manufacturing, Inc." disabled></b-form-input>
                <span id="workaddress">Brgy. Hilapnitan, Baybay City, Leyte, Philippines</span>
              </b-form-group>   
              <b-form-group label="Former Graphic Designer">
                <b-form-input id="card-text-input" value="Puregold Price Club, Inc." disabled></b-form-input>
                <span id="workaddress">Baybay City & Bato Leyte, Philippines</span>
              </b-form-group>     
              <b-form-group label="OJT IT Specialist">
                <b-form-input id="card-text-input" value="Leyte Electric Cooperative, Inc." disabled></b-form-input>
                <span id="workaddress">Brgy. Lamak, Hilongos, Leyte, Philippines</span>
              </b-form-group>           
            </b-col>
          </b-row>
        </b-card>
        <p id="copyright">&copy;2020 Veoscript.Official, Personal Webpage.</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "About",
  components: {
    navbar: Navbar
  }
}
</script>

<style>
  #card-about{
    background: #20284D;
    color: #A8B3DB;
  }

  #card-text{
    font-weight: bolder;
    color: #fff;
  }

  #card-text-input{
    background: #495DAC;
    border: 0;
    color: #FAC6AD;
  }

  #copyright{
    font-size: 12px;
    color: #A8B3DB;
  }

  #workaddress{
    font-size: 12px;
    color: #fff;
  }
</style>
