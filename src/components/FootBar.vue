<template>
    <div>
      <footer class="bd-footer text-muted docs-border">
        <b-row class="justify-content-center container">
          <b-col sm="3">
            <b-img class="ologo" fluid src="@/assets/photos/coverwhite.png" width="150"></b-img>
            <p class="cname">Veoscript Official Website & Portfolio</p>
            <span class="cname">
              Im a freelance designer based Philippines. I create innovative solutions that make your product or
              service more effective in the marketplace.
            </span>
          </b-col>
          <b-col sm="9">
            <b-row>
              <b-col sm="3">
                <h5 class="ftxt">Hobbies</h5>
                <ul>
                  <li>Musician</li>
                  <li>Song Writer / Producer</li>
                  <li>Programmer</li>
                  <li>IT Specialist</li>
                </ul>
              </b-col>
              <b-col sm="4">
                <h5 class="ftxt">Compositions</h5>
                <ul>
                  <li><router-link to="/">Songs</router-link></li>
                  <li><router-link to="/">Poems</router-link></li>
                  <li><router-link to="/">Art Gallery</router-link></li>
                  <li><router-link to="/">Photo Gallery</router-link></li>
                </ul>
              </b-col>
              <b-col sm="5">
                <h5 class="ftxt">Contact Info</h5>
                <ul class="ul-contactus">
                  <li><b-icon icon="envelope" /> jeromevillaruel1998@gmail.com</li>
                  <li><b-icon icon="phone" /> Call Me: 09753286466 / 09380044523</li>
                  <li>
                    <b-icon icon="geo-alt" /> Bato, Leyte, Philippines
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </footer>
      <div class="copy-right">
       &copy;{{ new Date().getFullYear() }} Veoscript.Official, Personal Webpage. Designed and Developed by VEOSCRIPT & ACATZK. Powered by Vue JS.
    </div>
  </div>
</template>

<style lang="scss" scoped>
footer {
  background: #0e152c;
  margin-top: 10px;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ologo{
  border-radius: 3px;
  margin-top: -20px;
}

.cname {
  color: #fff;

  span{
    color: #fff;
  }
}

.ul-contactus li {
  list-style-type: none !important;
  color: #eeeeee;
}

ul li {
  list-style-type: none;
  position: relative;
  right: 40px;
  color: #eeeeee;
}

ul li a {
  color: #eeeeee;
}

ul li a:hover {
  color: #fff;
}

.ftxt {
  color: #fff;
}

.copy-right {
  text-align: center;
  font-size: 10px;
  color: #fff;
  padding: 10px 0;
  background: #080d1d;
  cursor: default;
}

</style>