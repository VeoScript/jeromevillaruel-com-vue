<template>
    <b-button-group size="sm">
        <b-button 
            id="heart" 
            variant="danger" 
            v-b-tooltip.hover 
            title="Heart"
            @click="heartModal = !heartModal"
        >
        <b-icon icon="heart-fill"></b-icon>
        </b-button>

        <b-modal 
            v-model="heartModal" 
            hide-footer
            title="To confirm the heart reaction kindly type your name."
        >
             <form ref="form" @submit.prevent="reactHeart">
                <b-form-group
                    label="Name"
                    label-for="name-input"
                >
                    <b-form-input
                        id="name-input"
                        v-model.trim="$v.reactName.$model"
                        autocomplete="off"
                        :class="{ 'is-invalid' : $v.reactName.$error, 'is-valid' : !$v.reactName.$invalid }"
                    ></b-form-input>
                    <div class="invalid-feedback feedback">
                        <span v-if="!$v.reactName.required">Name is required</span>
                        <span v-if="!$v.reactName.minLength">Name must have at least {{ $v.reactName.$params.minLength.min }} letters. </span>
                        <span v-if="!$v.reactName.maxLength">Name must have at most {{ $v.reactName.$params.maxLength.max }} letters.</span>
                    </div>
                </b-form-group>
                <b-button
                    v-if="!loading"
                    class="btn btn-primary btn-md" 
                    id="btnpost"
                    block 
                    @click="reactHeart">
                    Heart React
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

        <b-button 
            class="btn btn-info" 
            id="comment" 
            v-b-tooltip.hover 
            title="Comment"
            router :to="`/freedomwall/${post_id}`"
        >
            <b-icon icon="chat-square-dots-fill"></b-icon>
        </b-button>

        <b-button class="btn btn-secondary" id="report" v-b-tooltip.hover title="Report">
        <b-icon icon="exclamation-triangle-fill"></b-icon>
        </b-button>

    </b-button-group>
</template>


<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

import { HEART_REACT_MUTATION } from '@/graphql/mutations'

export default {
    name: 'ButtonActions',

    props: ['post_id'],

    data () {
        return {
            heartModal: false,
            reactName: '',
            loading: false
        }
    },

    validations: {
        reactName: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(25)
        }
    },

    methods: {
        reactHeart() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                const { reactName } = this.$data
                this.$apollo.mutate({
                    mutation: HEART_REACT_MUTATION,
                    variables: {
                        name: reactName,
                        post_id: this.post_id
                    }
                }).then(() => {
                    this.loading = false
                    this.reactName = ''
                    this.heartModal = false
                    this.$v.$reset()
                }).catch(error => console.log(error))
            }
        }
    }

}
</script>
<style>
  .modal-header{
    background: #374785;
    color: #fff;
  }
  
  .modal-body{
    background: #374785;
    color: #fff;
  }

  .close{
    color: #fff;
  }

  .close:hover{
    color: #fff;
  }
</style>