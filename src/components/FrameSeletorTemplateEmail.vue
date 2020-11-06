<template>
    <div >
        {{ titulo }}
        <SeletorTemplateEmail v-model="templateEmailSelecionado" v-on:input="$emit('input', templateEmailSelecionado)"></SeletorTemplateEmail>
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