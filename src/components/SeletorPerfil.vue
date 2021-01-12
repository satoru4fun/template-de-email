<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Seletor label='Perfil:' :defaultValue="defaultValue" :listaOpcoes="perfis" v-model="perfilSelecionado" v-on:input="$emit('input', perfilSelecionado)"></Seletor>
            </div>
        </div>
    </div>
</template>

<script>
import perfis from '../data/perfis.json'
import Seletor from './Seletor.vue'

export default {
    data () {
        return {
            perfilSelecionado:null,
            defaultValue: 'Escolha o perfil'
        }
    },
    computed: {
        perfis: () => perfis
    },
    components: {
        Seletor
    }
}
</script>

<style scoped>

</style>