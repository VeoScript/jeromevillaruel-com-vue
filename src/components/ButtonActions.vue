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
            title="Put your name to HEART REACT"
        >
             <form ref="form">
                <b-form-group
                    label="Name"
                    label-for="name-input"
                >
                    <b-form-input
                        id="name-input"
                        v-model="name"
                    ></b-form-input>
                </b-form-group>
                <b-button class="btn btn-danger btn-md" block @click="reactHeart">Heart React</b-button>
            </form>
        </b-modal>

        <b-button class="btn btn-info" id="comment" v-b-tooltip.hover title="Comment">
        <b-icon icon="chat-square-dots-fill"></b-icon>
        </b-button>

        <b-button class="btn btn-secondary" id="report" v-b-tooltip.hover title="Report">
        <b-icon icon="exclamation-triangle-fill"></b-icon>
        </b-button>

    </b-button-group>
</template>


<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'ButtonActions',

    props: ['post_id'],

    data () {
        return {
            heartModal: false,
            name: '',
            names: []
        }
    },

    methods: {
        reactHeart() {

            this.heartModal = false
        }
    }

}
</script>