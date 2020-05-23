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

         <b-modal v-model="heartModal">{{ post_id }}</b-modal>

        <b-button class="btn btn-info" id="comment" v-b-tooltip.hover title="Comment">
        <b-icon icon="chat-square-dots-fill"></b-icon>
        </b-button>

        <b-button class="btn btn-secondary" id="report" v-b-tooltip.hover title="Report">
        <b-icon icon="exclamation-triangle-fill"></b-icon>
        </b-button>

    </b-button-group>
</template>


<script>
export default {
    name: 'ButtonActions',

    props: ['post_id'],

    data () {
        return {
            heartModal: false
        }
    },

}
</script>