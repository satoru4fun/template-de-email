<template>
    <div>
        <Seletor :defaultValue="defaultValue" :listaOpcoes="templatesDeEmail" v-model="templateEmailSelecionado" v-on:input="$emit('input', templateEmailSelecionado)"></Seletor>
    </div>
</template>

<script>
import templatesDeEmail from '../data/TemplatesDeEmail.json'
import Seletor from './Seletor.vue'

export default {
    data () {
        return {
            templateEmailSelecionado:null,
            defaultValue: 'Escolha o tipo de modelo'
        }
    },
    computed: {
        templatesDeEmail: () => templatesDeEmail
    },
    components: {
        Seletor
    }
}
</script>

<style scoped>

</style>