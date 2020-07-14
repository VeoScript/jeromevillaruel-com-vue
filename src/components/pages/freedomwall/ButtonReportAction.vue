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
                    label="Enter the Administrator Password"
                    label-for="name-input"
                >
                    <div class="input-group">
                        <input 
                            autocomplete="off"
                            type="password" 
                            id="password"
                            class="form-control" 
                            v-model.trim="$v.password.$model"
                            :class="{ 'is-invalid' : $v.password.$error, 'is-valid' : !$v.password.$invalid }"
                        >
                        <div id="btnText" type="button" class="input-group-append" @click="toggleShowPassword" style="cursor: pointer;">
                            <i v-if="!showpassword" class="input-group-text">
                                <b-icon icon="eye-fill"></b-icon>
                            </i>
                            <i v-else class="input-group-text">
                                <b-icon icon="eye-slash-fill"></b-icon>
                            </i>
                        </div>
                        <div class="invalid-feedback feedback">
                            <span v-if="!$v.password.required">Password is required</span>
                        </div>
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

import { toastAlertStatus } from '@/assets/js/toastAlertStatus'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { GET_ADMIN_PASSWORD } from '@/graphql/queries'
import { REPORT_DELETE_MUTATION } from '@/graphql/mutations'

export default {
    name: 'ButtonReportAction',

    components: {
        Alert: () => import('@/components/Alert')
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
            showDismissibleAlert: false,
            showpassword: false,
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
                        toastAlertStatus('success', 'Successfully Deleted Post!')
                        this.loading = false
                        this.password = ''
                        this.reportModal = false
                        this.$v.$reset()
                    }).catch(error => console.log(error))
                } else {
                    this.error = 'Your password is absolutely invalid...'
                    toastAlertStatus('warning', 'Unauthorized Personnel are strictly prohibated!')
                }
            }
        },
        toggleShowPassword() {
            let show = document.getElementById('password')
            if(this.showpassword == false) {
                this.showpassword = true
                show.type = 'text'
            } else {
                this.showpassword = false
                show.type = 'password'
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

<style scoped>
#password, #btnText{
    background: #495DAC;
    border: 0;
    color: #ffffff;
}
</style>
