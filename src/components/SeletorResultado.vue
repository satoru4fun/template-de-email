<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Seletor label='Resultado:' :defaultValue="defaultValue" :listaOpcoes="resultados" v-model="resultadoSelecionado" v-on:input="$emit('input', resultadoSelecionado)"></Seletor>
            </div>
        </div>
    </div>
</template>

<script>
import resultados from '../data/resultados.json'
import Seletor from './Seletor.vue'

export default {
    data () {
        return {
            resultadoSelecionado:null,
            defaultValue: 'Escolha o resultado'
        }
    },
    computed: {
        resultados: () => resultados
    },
    components: {
        Seletor
    }
}
</script>

<style scoped>

</style>