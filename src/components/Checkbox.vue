<template>
    <div class="form-check">
        <input id="checkbox" class="form-check-input" type="checkbox" v-bind="{ checked: isChecked }" v-on:change="$emit('change', $event.target.checked)">
        <label for="checkbox" class="form-check-label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        label: String,
        isChecked: Boolean
    }
}
</script>

<style scoped>

</style>