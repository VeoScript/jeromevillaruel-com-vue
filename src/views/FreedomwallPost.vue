<template>
    <div>
        <div v-if="$apollo.loading" class="mt-3">
            <spinner />
        </div>
        <b-container class="mt-4" v-else>
            <b-row class="justify-content-center">
                <b-col cols="sm-4">
                    <b-card id="card-about" no-body class="overflow-hidden mb-2" style="max-width: 540px;">
                        <b-row no-gutters>
                            <b-col sm="6">
                            <b-card-img src="https://pbs.twimg.com/media/EYCOxmtUwAA__Hz?format=jpg&name=medium" alt="Image" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col sm="6">
                            <b-card-body title="Villaruel Jerome">
                                <b-card-text>
                                @veoscript/contact<br>
                                -09753286466<br>
                                -09380044523<br>
                                </b-card-text>
                            </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col cols="sm-8">
                    <b-card id="card-about" class="mb-3" 
                        
                    >
                    <!-- v-for="(post, index) in posts " :key="index" -->
                        <div class="fl">
                            <b-card-title>
                            <!-- {{ capitalize(post.name) }} -->
                            Joshua Galit
                            <br><span id="lbldate">
                                <!-- {{ post.created_at.split('T')[0] }} -->
                                Posted on 123 <b-icon icon="alarm"></b-icon> <!--timeago :datetime="post.created_at" :auto-update="60"></timeago -->
                            </span>
                            </b-card-title>
                            <b-card-text max-width="100">
                                <!-- {{ post.posts }} -->
                                Post
                            </b-card-text>
                            <!-- {{ post.react.aggregate.count }} -->
                            <br><span class="countreact"><b-icon icon="heart-fill"></b-icon>&nbsp;0</span>&nbsp;
                            <span class="countreact mx-2"><b-icon icon="chat-square-dots-fill"></b-icon> 0</span>
                        </div>
                        <hr>
                        <div class="fr">

                            <!-- <button-actions 
                            :post_id="post.id"
                            /> -->

                        </div>
                    </b-card>
                </b-col>
        <b-container>
    </div>
</template>

<script>
export default {
    name: 'FreedomwallPost',

    components: {
        Spinner: () => import('@/components/Spinner')
    },


}
</script>