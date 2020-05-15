<template>
  <div class="education">
    <navbar></navbar>
    <b-tabs id="containertabs" content-class="mt-3" fill>
      <b-tab title="College" id="containertabstitle" active>
        <b-row class="justify-content-center text-center">
          <b-col>
            <b-img src="../assets/photos/schools/SLSU.png" alt="SLSU" width="220" rounded="rounded"></b-img>
            <p id="e-text" class="mb-0">Southern Leyte State University</p>
            <span id="e-address">Sogod, Southern Leyte, Philippines</span>
            <p id="e-course" class="mt-3 mb-0">Bachelor of Science in Information Technology <span id="e-major">Major in Networking</span></p>
            <p id="e-year">2015-2019</p>
            <a href="http://slsuonline.edu.ph/index.php/en/" target="_blank" id="school-link">www.slsuonline.edu.ph</a>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="High School">
        <b-row class="justify-content-center text-center">
          <b-col>
            <b-img src="../assets/photos/schools/BAI.jpg" alt="SLSU" width="200" rounded="circle"></b-img>
            <p id="e-text" class="mb-0">Bato Academy Inc.</p>
            <span id="e-address">987 E. Jacinto, Kalangaman Dist., Bato, Leyte, Philippines</span>
            <p id="e-course" class="mt-3 mb-0">High School Student <span id="e-major">Band Master Year of 2013-2014</span></p>
            <p id="e-year">2011-2015</p>
            <a href="http://www.philippines-schools.com/private-school/bato-academy-inc-404655.aspx" target="_blank" id="school-link">batoacademyinc.info</a>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Elementary">
        <b-row class="justify-content-center text-center">
          <b-col>
            <b-img src="../assets/photos/schools/PESC.jpg" alt="SLSU" width="200" rounded="circle"></b-img>
            <p id="e-text" class="mb-0">Pamplona Elementary School Central</p>
            <span id="e-address">Pamplona I, Las Piñas, Metro Manila, Philippines</span>
            <p id="e-course" class="mt-3 mb-0">Elementary Student</p>
            <p id="e-year">2004-2010</p>
            <a href="https://www.facebook.com/pages/Pamplona-Elementary-School-Central/286004941475723" target="_blank" id="school-link">pamplonaelemschoolcentral.facebookpage</a>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
    <p id="copyright-home" class="mt-3">&copy;2020 Veoscript.Official, Personal Webpage.</p>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Education",
  components: {
    navbar: Navbar
  }
}
</script>

<style>
  #containertabs{
    background: #24315E;
    padding-bottom: 20px;
  }

  a{
    color: #fff;
  }
  
  a:hover{
    color: #A8B3DB;
  }

  #e-text{
    font-family: 'Calibri';
    font-size: 30px;
    font-weight: bolder;
    color: #fff;
  }

  #e-address{
    font-family: 'Calibri';
    font-size: 14px;
    font-weight: lighter;
    color: #fff;
  }

  #e-course{
    font-family: 'Calibri';
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
  }

  #e-major{
    font-family: 'Calibri';
    font-size: 14px;
    font-weight: lighter;
    color: #72AECB;
  }

  #e-year{
    font-family: 'Calibri';
    font-size: 18px;
    font-weight: bolder;
    color: #ECAB44;
  }

  #school-link{
    color: #72AECB;
  }
</style>