<template>
  <div>
    <b-jumbotron>
      <b-row class="justify-content-center text-center">
        <b-col cols="sm-12">
          <b-img rounded="rounded" fluid width="300" alt="placeholder" :src="require('../assets/photos/white.png')"></b-img>
          <h1 class="mt-2 mb-1" id="j-1">Jerome Villaruel</h1>
          <h4 class="mb-2" id="j-2">
            Information Technology, Web Developer and UX & UI Designer.
          </h4>
          <b-avatar href="https://facebook.com/veoscript" target="_blank" id="facebooklink" v-b-tooltip.hover title="Add or Follow me on Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></b-avatar>&nbsp;
          <b-avatar href="https://twitter.com/VeoScript43" target="_blank" id="twitterlink" v-b-tooltip.hover title="Follow me on Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></b-avatar>&nbsp;
          <b-avatar href="https://github.com/VeoScript" target="_blank" id="githublink" v-b-tooltip.hover title="Follow me on Github and give a star for my repositories"><font-awesome-icon :icon="['fab', 'github']" /></b-avatar>&nbsp;
           
          <hr class="my-4">
        </b-col>

        <b-col cols="sm-12">
          <p class="text-center">
            Subscribe and Follow me to all of my social media accounts for more info and projects.
          </p>
        </b-col>
        <b-col cols="sm-4">
          <b-input-group class="mb-1" prepend="Email">
            <b-form-input 
              type="email" 
              v-model.trim="$v.email.$model"
              :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
            >
            </b-form-input>
            <b-input-group-append >
              <b-button 
                v-if="!loading"
                size="sm" 
                text="Button" 
                variant="primary"
                @click="subscribe">
                Subscribe
              </b-button>
              <b-button v-else variant="primary" disabled>
                <b-spinner small type="grow"></b-spinner>
                Loading...
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <Spinner class="mt-2" v-if="!villaruel_subscriber" />
            <h3 v-else class="text-center"><b id="n-subscribers" v-for="(c, i) in villaruel_subscriber.slice(-1)" :key="i">
              {{  c.id }}
              </b>&nbsp;
              <small>Subscribers</small>
            </h3>
        </b-col>
      </b-row>
    </b-jumbotron>
    <foot-bar/>
  </div>
</template>

<script>


import { required, email } from 'vuelidate/lib/validators'
import { ADD_SUBSCRIBER_MUTATION } from '@/graphql/mutations'
import { GET_ALL_SUBSCRIBER_QUERY, COUNT_ALL_SUBSCRIBER_QUERY } from '@/graphql/queries'
import { GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION, COUNT_ALL_SUBSCRIBER_SUBSCRIPTION } from '@/graphql/subscriptions'

export default {
      name: 'Jumbotron',

      components: {
        Spinner: () => import('./Spinner'),
        FootBar: () => import('@/components/FootBar.vue')
      },

      data () {
        return {
           email: '',
           loading: false,
           counter: null
        }
      },

      validations: {
        email: {
            required,
            email
        }
      },

      methods: {
        subscribe() {
          this.$v.$touch()
            if (!this.$v.$invalid) {
               this.loading = true
               this.$apollo.mutate({
                 mutation: ADD_SUBSCRIBER_MUTATION,
                 variables: {
                   email: this.email
                 },
                 refetchQueries: ['getCountSubscriber', 'getAllSubscriber']
               }).then(() => {
                  this.loading = false
                  this.$v.$reset()
                  this.$swal(this.email + ` is successfully subscribed to Jerome Villaruel Official Website. Thank you.`)
                  this.email = ''
               }).catch(error => console.log(error))
            }
        }
      },

      apollo: {
        villaruel_subscriber: {
          query: GET_ALL_SUBSCRIBER_QUERY,
          subscribeToMore: {
            document: GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION,
            updateQuery(previousResult, { subscriptionData }) {
              if (previousResult) {
                return {
                  villaruel_subscriber: [
                    ...subscriptionData.data.villaruel_subscriber
                  ]
                }
              }
            }
          },
          result ({ data }) {
            this.counter = data.villaruel_subscriber
          }
        }
      }
}
</script>

<style>
  .jumbotron{
    background: #24315E;
    border-radius: 0px;
    color: #A8D1E7;
    margin-top: 40px;
    height: 100vh;
  }
  .swal2-modal{
    background: #20284D;
    font-family: 'Varela Round';
    color: white;
  }
  
  .swal2-title{
    font-family: 'Varela Round';
    color: #fff;
    margin: 10px;
  }

  #n-subscribers{
    color: #ECAB44;
  }

  #j-1{
    font-family: 'Monoton';
    font-size: 35px;
    color: #DEACF5;
  }

  #j-2{
    font-family: 'Varela Round';
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
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
</style>
