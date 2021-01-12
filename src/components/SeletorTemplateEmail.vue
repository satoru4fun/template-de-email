<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Seletor label='Template de Email' :defaultValue="defaultValue" :listaOpcoes="templatesDeEmail" v-model="templateEmailSelecionado" v-on:input="$emit('input', templateEmailSelecionado)"></Seletor>
            </div>
        </div>
    </div>
</template>

<script>
import templatesDeEmail from '../data/templatesDeEmail.json'
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