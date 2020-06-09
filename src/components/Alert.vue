<template>
    <b-alert 
        show 
        dismissible
        variant="danger"
    >
        {{ text }} <b>&rArr;</b>
    </b-alert>
</template>

<script>
export default {
    name: 'Alert',

    props: {
        text: {
            required: true,
            type: String
        }
    }
}
</script>