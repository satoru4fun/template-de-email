<template>
    <div>
        <select>
            <option value="" disabled selected hidden>Escolha o tipo de modelo</option>
            <option  v-for="modeloDeEmail in modelosDeEmail" v-bind:key="modeloDeEmail.id" :value="modeloDeEmail.descricao">{{ modeloDeEmail.descricao }}</option>
        </select>
    </div>
</template>

<script>
import modelosDeEmail from '../data/ModelosDeEmail.json'

export default {
    data () {
        return {
        }
    },
    computed: {
        modelosDeEmail: () => modelosDeEmail
    }
}
</script>

<style scoped>

</style>