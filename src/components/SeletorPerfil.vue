<template>
    <div>
        <Seletor label='Perfil:' :defaultValue="defaultValue" :listaOpcoes="perfis" v-model="perfilSelecionado" v-on:input="$emit('input', perfilSelecionado)"></Seletor>
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