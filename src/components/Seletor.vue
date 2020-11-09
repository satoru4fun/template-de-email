<template>
    <div>
        <select v-on:input="$emit('input', $event.target.value)">
            <option v-if="!!defaultValue" value="" disabled selected hidden>{{ defaultValue }}</option>
            <option  v-for="opcao in listaOpcoes" v-bind:key="opcao.id" :value="opcao.id">{{ opcao.descricao }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        defaultValue: String,
        listaOpcoes: {}
    }
}
</script>

<style scoped>

</style>