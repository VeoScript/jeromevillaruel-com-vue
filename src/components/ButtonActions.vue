<template>
    <b-button-group size="sm">

        <!-- component of react -->
        <button-react-action 
            :post_id="post_id"
        />

        <!-- component of comments -->
        <button-comment-action 
            :post_id="post_id"
        />

        <!-- component of report -->
        <button-report-action 
          :post_id="post_id"
        />

    </b-button-group>
</template>


<script>




export default {
    name: 'ButtonActions',

    components: {
        ButtonCommentAction: () => import('./ButtonCommentAction'),
        ButtonReactAction: () => import('./ButtonReactAction'),
        ButtonReportAction: () => import('./ButtonReportAction')
    },

    props: {
        post_id: {
            type: String,
            require: true
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