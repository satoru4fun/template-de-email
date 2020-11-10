<template>
    <div>
        {{ titulo }}
        <SeletorTemplateEmail v-model="templateEmailSelecionado" v-on:input="$emit('input', templateEmailSelecionadoComputado)"></SeletorTemplateEmail>
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
    },
    computed: {
        templateEmailSelecionadoComputado: function () {
            return JSON.parse(this.templateEmailSelecionado).id
        }
    }
}
</script>

<style scoped>

</style>