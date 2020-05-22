<template>
  <div class="freedomwall">
    <navbar></navbar>
    <div v-if="$apollo.loading" class="mt-3">
       <spinner />
    </div>
    <b-container class="mt-4" v-else>
      <b-row class="justify-content-center">
        <b-col sm="4" class="mb-2">
          <b-card title="Freedom Wall" id="card-about">
            <b-card-sub-title class="mb-2">What's on your mind?</b-card-sub-title>
            <hr>
            <b-form-group  label="Name" label-for="txtname">
              <b-form-input 
                id="txtname" 
                v-model.trim="$v.name.$model"
                :class="{ 'is-invalid' : $v.name.$error, 'is-valid' : !$v.name.$invalid }"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Post anything here..." label-for="txtpost">
              <b-textarea 
                id="txtpost" 
                v-model.trim="$v.freedomWords.$model"
                :class="{ 'is-invalid' : $v.freedomWords.$error, 'is-valid' : !$v.freedomWords.$invalid }"
              ></b-textarea>
            </b-form-group>
            <b-button variant="primary" class="float-right mt-2" id="btnpost">Post</b-button >
          </b-card>
          <p id="copyright">&copy;2020 Veoscript.Official, Personal Webpage. Powered by Vue JS.</p>
        </b-col>
        <b-col sm="8" >
           <b-card id="card-about" class="mb-3" v-for="(post, index) in posts" :key="index">
              <div class="fl">
                <b-card-title>
                  {{ capitalize(post.name) }}
                  <br><span id="lbldate">
                    Posted on {{ post.created_at.split('T')[0] }} <b-icon icon="alarm"></b-icon> <timeago :datetime="post.created_at" :auto-update="60"></timeago>
                  </span>
                </b-card-title>
                <b-card-text max-width="100">
                    {{ post.posts }}
                </b-card-text>
                <br><span class="countreact"><b-icon icon="heart-fill"></b-icon> 0</span>&nbsp;
                <span class="countreact mx-2"><b-icon icon="chat-square-dots-fill"></b-icon> 0</span>
              </div>
              <hr>
              <div class="fr">
                <b-button-group size="sm">
                  <b-button id="heart" variant="danger" v-b-tooltip.hover title="Heart">
                    <b-icon icon="heart-fill"></b-icon>
                  </b-button>
                  <router-link to="/" class="btn btn-info" id="comment" v-b-tooltip.hover title="Comment">
                    <b-icon icon="chat-square-dots-fill"></b-icon>
                  </router-link>
                  <router-link to="/" class="btn btn-secondary" id="report" v-b-tooltip.hover title="Report">
                    <b-icon icon="exclamation-triangle-fill"></b-icon>
                  </router-link>
                </b-button-group>
              </div>
            </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import { POST_FREEDOM_WALL } from '@/graphql/mutations'
import { GET_ALL_POSTS_FREEDOM_WALL } from '@/graphql/queries'
import { required } from 'vuelidate/lib/validators'

export default {
  name: "FreedomWall",

  data () {
    return {
      posts: [],
      name: '',
      freedomWords: ''
    }
  },

  validations: {
    name: {
        required
    },
    freedomWords: {
      required
    }
  },

  components: {
    navbar: () => import('@/components/Navbar.vue'),
    Spinner: () => import('@/components/Spinner')
  },

  methods: {
    capitalize(s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
  },

  apollo: {
    freedom_wall: {
      query: GET_ALL_POSTS_FREEDOM_WALL,
      result ({ data }) {
        this.posts = data.freedom_wall
      }
    }
  }

}
</script>

<style>
  #card-about{
    background: #20284D;
    color: #A8B3DB;
  }

  .text-muted{
    color: #fff!important;
  }

  #copyright{
    font-size: 12px;
    color: #A8B3DB;
  }

  #txtname, #txtpost{
    background: #495DAC;
    border: 0;
    color: #ffffff;
  }

  #lbldate{
    font-size: 12px;
    font-weight: lighter;
    color: #778ce2;
  }

  #btnpost{
    background: #495DAC;
    border: none;
  }

  #heart{
    background: #f66f6c;
    border-color: #f66f6c;
  }
</style>