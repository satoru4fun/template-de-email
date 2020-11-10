<template>
    <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-bind="{ checked: isChecked }" v-on:change="$emit('change', $event.target.checked)">
            {{ label }}
        </label>
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