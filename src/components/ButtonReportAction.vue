<template>
     <b-button 
        id="report" 
        variant="secondary" 
        v-b-tooltip.hover 
        title="Report"
        @click="reportModal = !reportModal"
    >
        <b-icon icon="exclamation-triangle-fill"></b-icon>

        <!-- React Head Modal -->
        <b-modal 
            v-model="reportModal" 
            hide-footer
            title="WARNING AUTHORIZED PERSONNEL ONLY!"
        >
            <p v-for="(p, i) in passwords" :key="i" v-show="p.getSinglePassword">{{ getSinglePassword = p.password }}</p>
            <alert 
                v-show="error"
                :text="error"
            />
            <!-- <h1 v-show="error">{{ error }}</h1> -->
            <form ref="form" @submit.prevent="deletePost">
                <b-form-group
                    label="Enter the administrator Password"
                    label-for="name-input"
                >
                    <b-form-input
                        id="name-input"
                        v-model.trim="$v.password.$model"
                        autocomplete="off"
                        :class="{ 'is-invalid' : $v.password.$error, 'is-valid' : !$v.password.$invalid }"
                    ></b-form-input>
                    <div class="invalid-feedback feedback">
                        <span v-if="!$v.password.required">Password is required</span>
                    </div>
                </b-form-group>
                <b-button
                    v-if="!loading"
                    class="btn btn-primary btn-md" 
                    id="btnpost"
                    block 
                    @click="deletePost">
                    Delete Post
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
        <!-- React Modal End -->
    </b-button>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { GET_ADMIN_PASSWORD } from '@/graphql/queries'
import { REPORT_DELETE_MUTATION } from '@/graphql/mutations'

export default {
    name: 'ButtonReportAction',

    components: {
        Alert: () => import('./Alert')
    },

    props: ['post_id'],

    data () {
        return {
            reportModal: false,
            password: '',
            loading: false,
            passwords: '',
            getSinglePassword: '',
            error: '',
            dismissSecs: 10,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },

    validations: {
        password: {
            required
        }
    },

    methods: {
        deletePost() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                if (this.getSinglePassword === this.password) {
                    this.loading = true
                    const { password } = this.$data
                    this.$apollo.mutate({
                        mutation: REPORT_DELETE_MUTATION,
                        variables: {
                            post_id: this.post_id
                        }
                    }).then(() => {
                        this.loading = false
                        this.password = ''
                        this.reportModal = false
                        this.$v.$reset()
                    }).catch(error => console.log(error))
                } else {
                    this.error = 'Your password is absolutely invalid...'
                }
            }
        }
    },

    apollo: {
        administrator: {
            query: GET_ADMIN_PASSWORD,
            result ({ data }) {
                this.passwords = data.administrator
            }
        }
    }

}
</script>