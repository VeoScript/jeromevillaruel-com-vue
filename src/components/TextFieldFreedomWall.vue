<template>
    <form @submit.prevent="freedomPost">
        <b-form-group label="Name">
            <b-form-input
                id="txtpost"
                v-model.trim="$v.name.$model"
                :class="{ 'is-invalid' : $v.name.$error, 'is-valid' : !$v.name.$invalid }"
            ></b-form-input>
            <div class="invalid-feedback feedback">
                <span v-if="!$v.name.required">Name is required</span>
                <span v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters. </span>
                <span v-if="!$v.name.maxLength">Name must have at most {{ $v.name.$params.maxLength.max }} letters.</span>
            </div>
        </b-form-group>

        <b-form-group label="Post anything here...">
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
    </form>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'


import { POST_FREEDOM_WALL } from '@/graphql/mutations'

export default {
    name: 'TextFieldFreedomWall',

    data () {
        return {
            name: '',
            freedomWords: '',
            loading: false,
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

    methods: {
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
                // this.name = ''
                this.freedomWords = ''
                this.$v.$reset()
            }).catch(error => console.log(error))
            }
        }
    }
}
</script>