<template>
    <div>
        <select v-on:input="$emit('input', $event.target.value)">
            <option value="" disabled selected hidden>Escolha o tipo de modelo</option>
            <option  v-for="templateDeEmail in templatesDeEmail" v-bind:key="templateDeEmail.id" :value="templateDeEmail.id">{{ templateDeEmail.descricao }}</option>
        </select>
    </div>
</template>

<script>
import templatesDeEmail from '../data/TemplatesDeEmail.json'

export default {
    data () {
        return {
        }
    },
    computed: {
        templatesDeEmail: () => templatesDeEmail
    }
}
</script>

<style scoped>

</style>