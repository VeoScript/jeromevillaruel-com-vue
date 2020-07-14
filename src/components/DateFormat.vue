<template>
    <span>
        {{ format_date(created_at) }}
    </span>
</template>

<script>

import moment from 'moment'

export default {
    name: 'DateFOrmat',

    props: ['created_at'],

    methods: {

        format_date(value) {

            return moment(String(value)).format('M/D/YYYY')

        }

    }
    
}
</script>