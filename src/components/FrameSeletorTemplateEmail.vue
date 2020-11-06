<template>
    <div>
        {{ titulo }}
        <SeletorTemplateEmail>
    </div>
</template>

<script>
import SeletorTemplateEmail from './SeletorTemplateEmail.vue'

export default {
    data () {
        return {
            titulo: 'Tipo de modelo'
        }
    },
    components: {
        SeletorTemplateEmail
    }
}
</script>

<style scoped>

</style>