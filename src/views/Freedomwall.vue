<template>
  <div class="freedomwall">
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
              <div class="invalid-feedback feedback">
                  <span v-if="!$v.name.required">Name is required</span>
                  <span v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters. </span>
                  <span v-if="!$v.name.maxLength">Name must have at most {{ $v.name.$params.maxLength.max }} letters.</span>
              </div>

            </b-form-group> <!-- full name button -->

            <b-form-group label="Post anything here..." label-for="txtpost">
              <b-textarea 
                id="txtpost" 
                v-model.trim="$v.freedomWords.$model"
                :class="{ 'is-invalid' : $v.freedomWords.$error, 'is-valid' : !$v.freedomWords.$invalid }"
              ></b-textarea>
              <div class="invalid-feedback feedback">
                  <span v-if="!$v.freedomWords.required">You posts is required</span>
                  <span v-if="!$v.freedomWords.minLength">You posts must have at least {{ $v.freedomWords.$params.minLength.min }} letters. </span>
                  <span v-if="!$v.freedomWords.maxLength">You posts must have at most {{ $v.freedomWords.$params.maxLength.max }} letters.</span>
              </div>

            </b-form-group> <!-- post text area button -->

            <b-button 
              variant="primary" 
              class="float-right mt-2" 
              id="btnpost" 
              @click="freedomPost"
              v-if="!loading"
            >
              Post
            </b-button > <!-- posts button -->
            <b-button 
              v-else 
              variant="primary" 
              id="btnpost" 
              disabled 
              class="float-right mt-2" 
            >
              <b-spinner small type="grow"></b-spinner>
              Loading...
            </b-button>
          </b-card>
          <p id="copyright">&copy;2020 Veoscript.Official, Personal Webpage. Powered by Vue JS.</p>
        </b-col>

        <b-col sm="8" >
           <b-card id="card-about" class="mb-3" 
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
                <span class="countreact mx-2"><b-icon icon="chat-square-dots-fill"></b-icon> 0</span>
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

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

import { POST_FREEDOM_WALL } from '@/graphql/mutations'
import { GET_ALL_POSTS_FREEDOM_WALL } from '@/graphql/queries'
import { GET_ALL_POSTS_FREEDOM_WALL_SUBSCRIPTION } from '@/graphql/subscriptions'


export default {
  name: "FreedomWall",

  data () {
    return {
      posts: [],
      name: '',
      freedomWords: '',
      loading: false,
      heartModal: false
    }
  },

  validations: {
    name: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(25)
    },
    freedomWords: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(200)
    }
  },

  components: {
    navbar: () => import('@/components/Navbar.vue'),
    Spinner: () => import('@/components/Spinner'),
    ButtonActions: () => import('@/components/ButtonActions')
  },

  methods: {
    capitalize(s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    },
    freedomPost() {
        this.$v.$touch()
        if (!this.$v.$invalid) {

           this.loading = true

           const { name, freedomWords } = this.$data

           this.$apollo.mutate({
             mutation: POST_FREEDOM_WALL,
             variables: {
                 name: name, 
                 posts: freedomWords
             }
           }).then(() => {
              this.loading = false
              this.name = ''
              this.freedomWords = ''
              this.$v.$reset()
           }).catch(error => console.log(error))
        }
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
