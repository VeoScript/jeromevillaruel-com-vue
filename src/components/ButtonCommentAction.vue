<template>
    <b-button 
        v-if="$route.path === '/freedom'"
        class="btn btn-info" 
        id="comment" 
        v-b-tooltip.hover 
        title="Comment"
    >
        <b-icon icon="chat-square-dots-fill"></b-icon>
    </b-button>
    <b-button 
        v-else
        class="btn btn-info" 
        id="comment" 
        v-b-tooltip.hover 
        title="Comment"
        router :to="`/freedomwall/${post_id}`"
        @click="commentModal = !commentModal"
    >
        <b-icon icon="chat-square-dots-fill"></b-icon>
        <!-- CommentModal -->
        <b-modal 
            v-model="commentModal" 
            hide-footer
            title="Please provide the field to comment."
        >
             <form ref="form" @submit.prevent="commentSubmit">
                <b-form-group
                    label="Name"
                    label-for="name-input"
                >
                    <b-form-input
                        id="name-input"
                        v-model.trim="$v.commentName.$model"
                        autocomplete="off"
                        :class="{ 'is-invalid' : $v.commentName.$error, 'is-valid' : !$v.commentName.$invalid }"
                    ></b-form-input>
                    <div class="invalid-feedback feedback">
                        <span v-if="!$v.commentName.required">Name is required</span>
                        <span v-if="!$v.commentName.minLength">Name must have at least {{ $v.commentName.$params.minLength.min }} letters. </span>
                        <span v-if="!$v.commentName.maxLength">Name must have at most {{ $v.commentName.$params.maxLength.max }} letters.</span>
                    </div>
                </b-form-group>
                <b-form-group label="Comment here..." label-for="txtpost">
                    <b-textarea 
                        v-model.trim="$v.commentUser.$model"
                        :class="{ 'is-invalid' : $v.commentUser.$error, 'is-valid' : !$v.commentUser.$invalid }"
                    ></b-textarea>
                    <div class="invalid-feedback feedback">
                        <span v-if="!$v.commentUser.required">You comment is required</span>
                    </div>

                    </b-form-group>
                <b-button
                    v-if="!loading"
                    class="btn btn-primary btn-md" 
                    id="btnpost"
                    block 
                    @click="commentSubmit">
                    Comment
                </b-button>
                <b-button 
                    v-else 
                    disabled 
                    class="btn btn-primary btn-md" 
                    id="btnpost"
                    block
                >
                <b-spinner small type="grow"></b-spinner>
                    Loading...
                </b-button>
            </form>
        </b-modal>
        <!-- Comment Modal End -->
    </b-button>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

import { COMMENT_MUTATION } from '@/graphql/mutations'

export default {
    name: 'ButtonCommentAction',

    props: ['post_id'],

    data () {
        return {
            commentModal: false,
            commentName: '',
            commentUser: '',
            loading: false
        }
    },

    validations: {
        commentName: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(25)
        },
        commentUser: {
            required
        }
    },

    methods: {
        commentSubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading= true
                const { commentName, commentUser } = this.$data
                this.$apollo.mutate({
                    mutation: COMMENT_MUTATION,
                    variables: {
                        post_id: this.post_id,
                        name: commentName,
                        comment: commentUser
                    }
                }).then(() => {
                    this.loading = false
                    this.commentName = ''
                    this.commentUser = ''
                    this.commentModal = false
                    this.$v.$reset()
                })
            }
        }
    }

}
</script>