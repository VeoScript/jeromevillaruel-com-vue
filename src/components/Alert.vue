<template>
    <b-alert 
        show 
        variant="warning"
    >
        {{ text }}
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