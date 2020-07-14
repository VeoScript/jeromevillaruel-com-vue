<template>
  <div class="projects">
    <b-card-group columns class="p-3">
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/inventorysystem.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="Inventory Management and POS System">
            <b-card-text>
              This program is implemented in LEYECO IV Leyte Electric Cooperative IV, Inc. <br>
              -Written in C#.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/LeyecoIV-Inventory-Management-and-POS-System" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/automatedenrollment.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="Automated Enrollment System">
            <b-card-text>
              This program is implemented in 
              DAFENHS Don Agustin F. Escaño National High School. <br>
              -Written in Visual Basic.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/DAFENHS-Automated-Enrollment-System" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/kphn.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="KPHN Coffee Shop Inventory System">
            <b-card-text>
              This program is under construction. <br>
              Available for all coffee shops for free. <br>
              -Written in Visual Basic.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/KPHN-Kapihan" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/officialwebsite.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="VEOSCRIPT Official Website">
            <b-card-text>
              Official website of Jerome Villaruel <br>
              Contributors : VeoScript & Acatzk <br>
              -Written in VUE.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/jeromevillaruel-official" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/TES.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="Teacher Evaluation System">
            <b-card-text>
              Final project in Database Management System II. <br>
              -Written in PHP.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/Teacher-Evaluation-System" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/firstblog.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="VEOSCRIPT First Blog">
            <b-card-text>
              The first blog of Jerome Villaruel <br>
              Contributors : VeoScript <br>
              -Written in PHP.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/MyBlog" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/parkingmonitoring.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="Parking Lot Monitoring System">
            <b-card-text>
              This program is available and you can use this to your parking lot area. <br>
              -Written in Visual Basic.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/Automated-Parking-Monitoring-System" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body id="card-about">
          <b-card-img img-top :src="require('../assets/photos/projects/gorehab.png')" alt="Image" class="rounded-0"></b-card-img>
          <b-card-body title="GoRehab Website">
            <b-card-text>
              Rehabilitation Center Management System. <br>
              -Written in PHP.
            </b-card-text>
            <b-button id="btngotogithub" href="https://github.com/VeoScript/GoRehab" variant="primary" target="_blank" size="sm">View repository on Github</b-button>
          </b-card-body>
        </b-card>
      </b-card-group>
 </div>
</template>

<style>
  .projects{
    margin-top: 90px;
  }

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

  #copyright-home{
    font-size: 10px;
    color: #A8B3DB;
    text-align: center;
  }
</style>