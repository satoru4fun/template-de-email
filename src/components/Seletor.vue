<template>
    <div class="form-group row">
        <label for="seletor" class="col-sm-2 col-form-label">{{ label }}</label>
        <div class="col-sm-10">
            <select id="seletor" class="form-control" v-on:input="$emit('input', $event.target.value)">
                <option v-if="!!defaultValue" value="" disabled selected hidden>{{ defaultValue }}</option>
                <option v-for="opcao in listaOpcoes" v-bind:key="opcao.id" :value="JSON.stringify(opcao)">{{ opcao.descricao }}</option>
            </select>
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