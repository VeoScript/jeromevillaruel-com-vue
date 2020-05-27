<template>
  <div class="freedomwall">
    <b-container class="mt-4">
      <b-row class="justify-content-center">
        <b-col sm="4" class="mb-2">
          <b-card title="Freedom Wall" id="card-about">
            <b-card-sub-title class="mb-2">What's on your mind?</b-card-sub-title>
            <hr>
            
            <!-- Text Field Free Wall -->
             <text-field-freedom-wall />
            <!-- End TextField Form -->
            
          </b-card>
          <p id="copyright">&copy;2020 Veoscript.Official, Personal Webpage. Designed and Developed by VEOSCRIPT & ACATZK. Powered by Vue JS.</p>
        </b-col>

        <b-col sm="8" >
          <div v-if="$apollo.loading" class="mt-3">
            <spinner />
          </div>
           <b-card v-else id="card-about" class="mb-3" 
              v-for="(post, index) in posts " :key="index"
            >
              <div class="fl">
                <b-card-title>
                  <b-icon icon="chat-quote"></b-icon> {{ capitalize(post.name) }}
                  <br><span id="lbldate">
                    Posted on {{ post.created_at.split('T')[0] }} <b-icon icon="alarm"></b-icon> <timeago :datetime="post.created_at" :auto-update="60"></timeago>
                  </span>
                </b-card-title>
                <b-card-text max-width="100">
                    {{ post.posts }}
                </b-card-text>
                <br><span class="countreact"><b-icon icon="heart-fill"></b-icon>&nbsp;{{ post.react.aggregate.count }}</span>&nbsp;
                <span class="countreact mx-2"><b-icon icon="chat-square-dots-fill"></b-icon> {{ post.commentCount.aggregate.count }}</span>
              </div>
              <hr>
              <div class="fr">

                <button-actions 
                   :post_id="post.id"
                />

              </div>
            </b-card>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>

import { GET_ALL_POSTS_FREEDOM_WALL } from '@/graphql/queries'
import { GET_ALL_POSTS_FREEDOM_WALL_SUBSCRIPTION } from '@/graphql/subscriptions'

export default {
  name: "FreedomWall",

  data () {
    return {
      posts: [],
      loading: false,
      heartModal: false
    }
  },


  components: {
    navbar: () => import('@/components/Navbar.vue'),
    Spinner: () => import('@/components/Spinner'),
    ButtonActions: () => import('@/components/ButtonActions'),
    TextFieldFreedomWall: () => import('@/components/TextFieldFreedomWall')
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
      subscribeToMore: {
        document: GET_ALL_POSTS_FREEDOM_WALL_SUBSCRIPTION,
        updateQuery(previousResult, { subscriptionData }) {
          if (previousResult) {
            return {
              freedom_wall: [
                ...subscriptionData.data.freedom_wall
              ]
            }
          }
        }
      },
      result ({ data }) {
        this.posts = data.freedom_wall
      }
    }
  }

}
</script>

<style>
  .freedomwall{
    margin-top: 100px;
  }

  #card-about{
    background: #20284D;
    color: #A8B3DB;
  }

  .text-muted{
    color: #fff!important;
  }

  #copyright{
    font-size: 10px;
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
