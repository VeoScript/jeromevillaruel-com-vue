<template>
  <div class="projects">
      <navbar></navbar>
      <b-row class="justify-content-center mt-3 m-2">
        <b-col sm="6">
          <b-card id="card-about" no-body class="overflow-hidden mb-2">
            <b-row no-gutters>
              <b-col sm="6">
                <b-card-img :src="require('../assets/photos/projects/kphn.png')" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col sm="6">
                <b-card-body title="KPHN Coffee Shop Inventory System">
                  <b-card-text>
                    This program is under construction. <br>
                    Available for all coffee shops for free. <br>
                    -Written in Visual Basic.
                  </b-card-text>
                  <b-button id="btngotogithub" href="https://github.com/VeoScript/KPHN-Kapihan" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card id="card-about" no-body class="overflow-hidden mb-2">
            <b-row no-gutters>
              <b-col sm="6">
                <b-card-img :src="require('../assets/photos/projects/parkingmonitoring.png')" height="80%" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col sm="6">
                <b-card-body title="Parking Lot Monitoring System">
                  <b-card-text>
                    This program is available and you can use this to your parking lot area. <br>
                    -Written in Visual Basic.
                  </b-card-text>
                  <b-button id="btngotogithub" href="https://github.com/VeoScript/Automated-Parking-Monitoring-System" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card id="card-about" no-body class="overflow-hidden mb-2">
            <b-row no-gutters>
              <b-col sm="6">
                <b-card-img :src="require('../assets/photos/projects/inventorysystem.png')" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col sm="6">
                <b-card-body title="Inventory Management and POS System">
                  <b-card-text>
                    This program is implemented in LEYECO IV Leyte Electric Cooperative IV, Inc. <br>
                    -Written in C#.
                  </b-card-text>
                  <b-button id="btngotogithub" href="https://github.com/VeoScript/LeyecoIV-Inventory-Management-and-POS-System" target="_blank" variant="primary" size="sm">View repository on Github</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card id="card-about" no-body class="overflow-hidden mb-2">
            <b-row no-gutters>
              <b-col sm="7">
                <b-card-img :src="require('../assets/photos/projects/automatedenrollment.png')" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col sm="5">
                <b-card-body title="Automated Enrollment System">
                  <b-card-text>
                    This program is implemented in 
                    DAFENHS Don Agustin F. Escaño National High School. <br>
                    -Written in Visual Basic.
                  </b-card-text>
                  <b-button id="btngotogithub" href="https://github.com/VeoScript/DAFENHS-Automated-Enrollment-System" target="_blank" variant="primary" size="sm">View repository on Github</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <p id="copyright" class="text-center">&copy;2020 Veoscript.Official, Personal Webpage. Powered by Vue JS.</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Projects',
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

  .card-title{
    font-size: 25px;
    font-weight: bolder;
    color: #fff;
  }

  #btngotogithub{
    background: #495DAC;
    border: none;
  }
</style>