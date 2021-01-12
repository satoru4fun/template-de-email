<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <label class="form-label" for="textbox">{{ label }}</label>
            </div>
            <div class="col">
                <input id="textbox" class="form-control" type="text" :placeholder="placeholder" :value="defaultValue" v-on:input="$emit('input', $event.target.value)">
            </div>
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