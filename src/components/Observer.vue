<template>
    <div class="observer">
        <div v-if="observer" class="text-center">
            <spinner />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Observer',

    data () {
        return {
            observer: null
        }
    },

    components: {
        Spinner: () => import('@/components/Spinner')
    },

    mounted () {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit('intersect')
            }
        })
        this.observer.observe(this.$el)
    },

}
</script>

<style scoped>
.observer {
    height: 1px !important;
}
</style>