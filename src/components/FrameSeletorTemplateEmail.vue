<template>
    <div>
        {{ titulo }}
        <SeletorTemplateEmail v-model="templateEmailSelecionado"></SeletorTemplateEmail>
        {{ templateEmailSelecionado }}
    </div>
</template>

<script>
import SeletorTemplateEmail from './SeletorTemplateEmail.vue'

export default {
    data () {
        return {
            titulo: 'Tipo de modelo',
            templateEmailSelecionado: null
        }
    },
    components: {
        SeletorTemplateEmail
    }
}
</script>

<style scoped>

</style>