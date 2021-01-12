<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Seletor label='Gênero:' :defaultValue="defaultValue" :listaOpcoes="generos" v-model="generoSelecionado" v-on:input="$emit('input', generoSelecionado)"></Seletor>
            </div>
        </div>
    </div>
</template>

<script>
import generos from '../data/generos.json'
import Seletor from './Seletor.vue'

export default {
    data () {
        return {
            generoSelecionado:null,
            defaultValue: 'Escolha o gênero'
        }
    },
    computed: {
        generos: () => generos
    },
    components: {
        Seletor
    }
}
</script>

<style scoped>

</style>