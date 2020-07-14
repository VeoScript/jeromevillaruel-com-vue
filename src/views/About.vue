<template>
   <b-container fluid class="main-section">
     <b-row>
        <b-col md="12" sm="12" class="image-section">
            <div class="frontpage"></div>
        </b-col>
        <b-row class="user-left-part">
          <b-col md="3" sm="3" class="user-profil-part pull-left">
            <b-row>
              <b-col md="12" sm="12" class="user-image text-center">
                <img :src="require('@/assets/photos/veo.jpg')">
              </b-col>
              <b-col md="12" sm="12" class="user-detail-section1 text-center">
                <button class="btn btn-defult follow "> Download Resume</button> <br>
              </b-col>
              <b-row class="user-detail-row">
                <b-col md="12" sm="12" class="user-detail-section2 pull-left">
                  <div class="border"></div>
                  <p>EMAIL</p>
                  <span>jeromevillaruel1998@gmail.com</span>
                </b-col>
                <b-col md="12" sm="12" class="user-detail-section2 pull-right">
                    <div class="border"></div>
                    <p>MOBILE</p>
                    <span>09753286466 / 09380044523</span>
                </b-col>
                <b-col md="12" sm="12" class="user-detail-section2">
                    <div class="border"></div>
                    <p>SKILLS</p>
                    <b-row>
                      <b-col sm="12" class="mt-2">
                        <strong class="float-left i1">Web Development</strong>
                        <span class="float-right t2">90%</span> <br>
                        <b-progress :value="90" variant="secondary"></b-progress>
                      </b-col>
                      <b-col sm="12" class="mt-2">
                        <strong class="float-left i1">Desktop Development</strong>
                        <span class="float-right t2">80%</span> <br>
                        <b-progress :value="80" variant="secondary"></b-progress>
                      </b-col>
                      <b-col sm="12" class="mt-2">
                        <strong class="float-left i1">Mobile App Development</strong>
                        <span class="float-right t2">50%</span> <br>
                        <b-progress :value="50" variant="secondary"></b-progress>
                      </b-col>
                      <b-col sm="12" class="mt-2">
                        <strong class="float-left i1">Networking</strong>
                        <span class="float-right t2">75%</span> <br>
                        <b-progress :value="75" variant="secondary"></b-progress>
                      </b-col>
                    </b-row>
                </b-col>
              </b-row>
            </b-row>
          </b-col>
          <b-col md="9" sm="9" class="pull-right profile-right-section">
            <b-row class="profile-right-section-row">
              <b-col md="12" sm="12" class="profile-header">
                <b-row>
                  <b-col md="8" sm="6" class="profile-header-section1 pull-left">
                    <h1><strong>Jerome Joseph Robiato Villaruel</strong></h1>
                    <p>Information Technologist / Web Developer</p>
                  </b-col>
                  <b-col md="4" sm="6" class="profile-header-section1 text-right pull-right mb-3">
                    <b-avatar href="https://facebook.com/veoscript" target="_blank" id="facebooklink" v-b-tooltip.hover title="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></b-avatar>&nbsp;
                    <b-avatar href="https://twitter.com/VeoScript43" target="_blank" id="twitterlink" v-b-tooltip.hover title="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></b-avatar>&nbsp;
                    <b-avatar href="https://github.com/VeoScript" target="_blank" id="githublink" v-b-tooltip.hover title="Github"><font-awesome-icon :icon="['fab', 'github']" /></b-avatar>&nbsp;
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="12">
                <b-row>
                  <b-col md="8" class="profile-tag-section text-center">
                    <div>
                      <b-tabs content-class="mt-3 abouttabs" fill>
                        <b-tab title="Basic Info" active><p>Basic Info</p></b-tab>
                        <b-tab title="Work Experience"><p>I'm the second tab</p></b-tab>
                        <b-tab title="Developers"><p>I'm the second tab</p></b-tab>
                      </b-tabs>
                    </div>
                  </b-col>
                  <b-col md="4" class="img-main-rightPart">
                    <b-row>
                      <b-col md="12">
                        <b-row class="image-right-part">
                          <b-col md="6" class="pull-left image-right-detail">
                            <p>HIGHLIGHT</p>
                          </b-col>
                          <b-col md="6" class="pull-right image-right-detail text-right">
                            <span><a href="#">view songs</a></span>
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col md="12" class="image-right">
                        <img :src="require('@/assets/photos/veo_black.jpg')">
                      </b-col>
                      <b-col md="12" class="image-right-detail-section2">
                        <p>THE VEOSCRIPT</p>
                        <span>
                          Siyam na kilometro at bangin ang iyong lalakbayin, mabayaran mo lang ang iyong pagiging taksil.
                          Mas pinili mo ang landas ng siyam, imbis na sa ikatlo ka mapunta di mo yun nagawa dahil sa pagiging swa-il.
                          <br>
                          -Jerome Villaruel
                        </span>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
    </b-row>
   </b-container>
</template>

<style lang="scss">
.frontpage {
  background: #f1f1f1;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section{
  padding: 0px;
  margin-top: 10px;
}
.image-section img{
  width: 100%;
  // height: 350px;
  position: relative;
}
.user-image{
  position: absolute;
  margin-top:-50px;
}
.user-left-part{
  margin: 0px;
}
.user-image img{
  width:100px;
  height:100px;
}
.user-profil-part{
  padding-bottom:30px;
  background-color:#FAFAFA;
}
.follow{
  width:50%;
  margin-top:70px;
  font-size: 10px;
  border:1px solid #DDDDDD;
  background-color: #fff;
  font-weight: lighter; 
}
.user-detail-row{
  margin:0px; 
}
.user-detail-section2 p{
  font-size:12px;
  padding: 0px;
  margin: 0px;
}
.user-detail-section2{
  margin-top:10px;
}
.user-detail-section2 span{
  color:#3F67B3;
  font-size: 14px;
}
.user-detail-section2 small{
  font-size:12px;
  color:#D3A86A;
}
.user-detail-section2 .t2{
  color:#2e2e2e;
  font-size: 12px;
}
.profile-right-section{
  padding: 20px 0px 10px 15px;
  background-color: #FFFFFF;  
}
.profile-right-section-row{
  margin: 0px;
}
.profile-header-section1 h1{
  font-size: 25px;
  margin: 0px;
}
.profile-header-section1 p{
  color:#878787;
}
.req-btn{
  height:30px;
  font-size:12px;
}
.profile-tag{
  padding: 10px;
  border:1px solid #F6F6F6;
}
.profile-tag p{
  font-size: 12px;
  color:#ADADAD;
}
.profile-tag i{
  color:#ADADAD;
  font-size: 20px;
}
.image-right-part{
  background-color: #FCFCFC;
  margin: 0px;
  padding: 5px;
}
.img-main-rightPart{
  background-color: #FCFCFC;
}
.image-right-detail{
  padding: 0px;
}
.image-right-detail p{
  font-size: 12px;
}
.image-right-detail a:hover{
  text-decoration: none;
}
.image-right img{
  width: 100%;
}
.image-right-detail-section2{
  margin: 0px;
}
.image-right-detail-section2 p{
  color:#38ACDF;
  margin:0px;
}
.image-right-detail-section2 span{
  color:#7F7F7F;
}

#facebooklink{
  background: #3f67b3;
}

#twitterlink{
  background: #1EACFF;
}

#githublink{
  background: #545B62;
}

.i1{
  font-weight: lighter;
}

.abouttabs{

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
    background: none;
    color: #fff;
    border: 1px solid #333;
    transition: all 0.5s;
  }

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link:hover{
    background: none;
    border: 1px solid #333;
    transition: all 0.5s;
  }
}
</style>