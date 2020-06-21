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
                    Posted on {{ post.created_at.split('T')[0] }} <b-icon icon="clock"></b-icon> <timeago :datetime="post.created_at" :auto-update="60"></timeago>
                  </span>
                </b-card-title>
                <b-card-text max-width="100" class="show-post">
                  <span v-if="post.posts.length >= 200 && !readMore">{{ post.posts.slice(0, 200) }}....
                    <br>
                    <a href="#" @click="readMore = !readMore">Read more</a>
                  </span>
                  <span v-else-if="post.posts.length > 200 && readMore">
                    {{ post.posts }}
                    <br>
                    <a href="#" @click="readMore = !readMore">Show less</a>
                  </span>
                  <span v-else>
                    {{ post.posts }}
                  </span>
                </b-card-text>
                <br>

                <heart-comment-count-modal 
                  :post_id="post.id"
                />

              </div>
              <hr>
              <div class="fr">

                <button-actions 
                   :post_id="post.id"
                />

              </div>
            </b-card>
        </b-col>
        <BackToTop/>
      </b-row>
    </b-container>
    <foot-bar/>
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
      heartModal: false,
      postHeartCount: false,
      readMore: false
    }
  },


  components: {
    navbar: () => import('@/components/Navbar.vue'),
    Spinner: () => import('@/components/Spinner'),
    ButtonActions: () => import('@/components/ButtonActions'),
    TextFieldFreedomWall: () => import('@/components/TextFieldFreedomWall'),
    HeartCommentCountModal: () => import('@/components/HeartCommentCountModal'),
    BackToTop: () => import('@/components/BackToTop'),
    FootBar: () => import('@/components/FootBar')
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

  .show-post {
    white-space: pre-wrap; 
    word-wrap: break-word;
    font-family: inherit;
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

  .countreact:hover {
    color: white;
    cursor: pointer;
  }
</style>
