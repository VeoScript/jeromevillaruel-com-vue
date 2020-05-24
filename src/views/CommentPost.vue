<template>
    <div>
        <div v-for="(com, ind) in commentData" :key="ind">
            <b-card-title style="font-size: 17px;">
                <b-icon icon="chat-dots"></b-icon> {{ capitalize(com.name) }}
                <span id="lbldate" class="ml-2" style="font-size: 13px;">
                    commented on {{ com.created_at.split('T')[0] }} <b-icon icon="alarm"></b-icon> <timeago :datetime="com.created_at" :auto-update="60"></timeago>
                </span>
            </b-card-title>
            <b-card-text max-width="100" class="ml-3">
                {{ com.comment }}
            </b-card-text>
            <hr>
        </div>
    </div>
</template>

<script>

import { GET_ALL_USER_COMMENT_BY_ID } from '@/graphql/queries'
import { GET_ALL_USER_COMMENT_BY_ID_SUBSCRIPTION } from '@/graphql/subscriptions'

export default {
    name: 'CommentPost',

    data () {
        return {
            commentData: []
        }
    },

    methods: {
        capitalize(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },

    apollo: {
        comments: {
            query: GET_ALL_USER_COMMENT_BY_ID,
            variables() {
                return {
                    post_id: this.$route.params.id
                }
            },
            subscribeToMore: {
                document: GET_ALL_USER_COMMENT_BY_ID_SUBSCRIPTION,
                variables() {
                    return {
                        post_id: this.$route.params.id
                    }
                },
                updateQuery(previousResult, { subscriptionData }) {
                    if (previousResult) {
                        return {
                            comments: [
                                ...subscriptionData.data.comments
                            ]
                        }
                    }
                }
            },
            result ({ data }) {
                this.commentData = data.comments
            }
        }
    }
}
</script>