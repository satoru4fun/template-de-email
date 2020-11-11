<template>
    <div class="form-group row">
        <label for="textbox" class="col-sm-2 col-form-label">{{ label }}</label>
        <div class="col-sm-10">
            <input id="textbox" class="form-control" type="text" :placeholder="placeholder" :value="defaultValue" v-on:input="$emit('input', $event.target.value)">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        defaultValue: String,
        placeholder: String
    }
}
</script>

<style scoped>

</style>