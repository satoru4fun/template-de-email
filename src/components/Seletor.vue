<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <label class="form-label" for="seletor">{{ label }}</label>
            </div>
            <div class="col">
                <select id="seletor" class="form-select" v-on:input="$emit('input', $event.target.value)">
                    <option v-if="!!defaultValue" value="" disabled selected hidden>{{ defaultValue }}</option>
                    <option v-for="opcao in listaOpcoes" v-bind:key="opcao.id" :value="JSON.stringify(opcao)">{{ opcao.descricao }}</option>
                </select>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    props: {
        label: String,
        defaultValue: String,
        listaOpcoes: {}
    }
}
</script>

<style scoped>

</style>