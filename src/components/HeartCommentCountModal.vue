<template>
    <div class="row ml-1">
        <span 
            class="countreact" 
            @click="postHeartCount = !postHeartCount"
            v-for="(p, i) in postData" :key="`C-${i}`"
        >
            <b-icon  icon="heart-fill"></b-icon>&nbsp;
                {{ p.react.aggregate.count }}
            <b-modal 
                v-model="postHeartCount" 
                hide-footer
                title="Person Who React Heart <3"
            >
                <div v-if="$apollo.loading" class="mt-3">
                    <spinner />
                </div>
                <div 
                    v-else
                >
                    <b-list-group 
                        v-for="(post, index) in postData" 
                        :key="`I-${index}`"
                    >
                        <b-list-group-item
                            id="card-about"
                            v-for="(pw, iw) in post.react.nodes" 
                            :key="`AS-${iw}`"
                        >
                            <b-icon  icon="heart-fill" ></b-icon> 
                            {{ capitalize(pw.name) }} 
                        </b-list-group-item>
                    </b-list-group>
                </div>
            </b-modal>
        </span>
         &nbsp;
        <span 
            class="countreact mx-2" 
            v-for="(post, ind) in postData" :key="`A-${ind}`"
            @click="postCommentCount = !postCommentCount"
        >
            <b-icon icon="chat-square-dots-fill"></b-icon> 
                {{ post.commentCount.aggregate.count }}

            <!-- <b-modal 
                v-model="postCommentCount" 
                hide-footer
                title="Person Who Comments"
            >
                <div v-if="$apollo.loading" class="mt-3">
                    <spinner />
                </div>
                <div 
                    v-else
                    v-for="(post, index) in postData" :key="`I-${index}`"
                >
                    <ul>
                        <li v-for="(pw, iw) in post.commentCount.nodes" :key="`AS-${iw}`">
                            {{ pw.name }}
                        </li>
                    </ul>
                </div>
            </b-modal> -->
        </span>
    </div>
</template>

<script>

import { GET_SINGLE_USER_POST } from '@/graphql/queries'
import { GET_SINGLE_USER_POST_SUBSCRIPTION } from '@/graphql/subscriptions'

export default {
    name: 'HeartCountModal',

    props: ['post_id'],

    components: {
        Spinner: () => import('@/components/Spinner')
    },

    data () {
        return {
            postHeartCount: false,
            postCommentCount: false,
            postData: []
        }
    },
    
    methods: {
        capitalize(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },

    apollo: {
        freedom_wall: {
            query: GET_SINGLE_USER_POST,
            variables() {
                return {
                    post_id: this.post_id
                }
            },
            subscribeToMore: {
                document: GET_SINGLE_USER_POST_SUBSCRIPTION,
                variables() {
                    return {
                        post_id: this.post_id
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