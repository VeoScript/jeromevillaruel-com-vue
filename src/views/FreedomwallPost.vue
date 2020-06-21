<template>
    <div class="freedomwall">
        <b-container class="mt-5">
            <b-row class="justify-content-center">
                <b-col cols="sm-4">
                    <my-info-card /> <!-- My Information Card -->
                </b-col>
                <b-col cols="sm-8">
                    <b-breadcrumb id="card-about">
                        <b-breadcrumb-item router to="/freedomwall">
                            Freedom Wall
                        </b-breadcrumb-item>
                        <b-breadcrumb-item active v-for="(n, i) in postData" :key="i">{{ n.name }}</b-breadcrumb-item>
                    </b-breadcrumb>
                    <div v-if="$apollo.loading" class="mt-3">
                        <spinner />
                    </div>
                    <b-card id="card-about" class="mb-3" 
                        v-else
                    >
                        <div class="fl"
                            v-for="(post, index) in postData" :key="index"
                        >
                            <b-card-title>
                            <b-icon icon="chat-quote"></b-icon> {{ capitalize(post.name) }}
                            <br><span id="lbldate">
                                Posted on {{ post.created_at.split('T')[0] }} <b-icon icon="alarm"></b-icon> <timeago :datetime="post.created_at" :auto-update="60"></timeago>
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
                        <hr />
                        <div class="fr">

                            <button-actions 
                                :post_id="postId"
                            />

                        </div>
                        <hr />
                        <!-- Fetching all comments -->
                         <comment-post />
                        <!-- End fetching -->
                        <BackToTop/>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

import { GET_SINGLE_USER_POST } from '@/graphql/queries'
import { GET_SINGLE_USER_POST_SUBSCRIPTION } from '@/graphql/subscriptions'

export default {
    name: 'FreedomwallPost',

    data () {
        return {
            postData: [],
            postId: this.$route.params.id,
            readMore: false
        }
    },

    methods: {
        capitalize(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },

    components: {
        Spinner: () => import('@/components/Spinner'),
        ButtonActions: () => import('@/components/ButtonActions'),
        MyInfoCard: () => import('@/components/MyInfoCard'),
        CommentPost: () => import('./CommentPost'),
        HeartCommentCountModal: () => import('@/components/HeartCommentCountModal'),
        BackToTop: () => import('@/components/BackToTop')
    },

    apollo: {
        freedom_wall: {
            query: GET_SINGLE_USER_POST,
            variables() {
                return {
                    post_id: this.$route.params.id
                }
            },
            subscribeToMore: {
                document: GET_SINGLE_USER_POST_SUBSCRIPTION,
                variables() {
                    return {
                        post_id: this.$route.params.id
                    }
                },
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
                this.postData = data.freedom_wall
            }
        }
    }
}
</script>

<style scroped>
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

  .countreact:hover {
    color: white;
    cursor: pointer;
  }

  .breadcrumb .breadcrumb-item a{
      color: #fff;
  }

  .breadcrumb .breadcrumb-item a:hover{
      color: #778ce2;
      text-decoration: none;
  }

  .show-post {
    white-space: pre-wrap; 
    word-wrap: break-word;
    font-family: inherit;
  }
</style>
