<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ titulo }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <SeletorTemplateEmail v-model="templateEmailSelecionado" v-on:input="$emit('input', templateEmailSelecionadoComputado)"></SeletorTemplateEmail>    
            </div>
        </div>
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