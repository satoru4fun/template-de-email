<template>
    <div class="container">
        <div class="row">
            <div class="form-check">
                <div class="col">
                    <input id="checkbox" class="form-check-input" type="checkbox" v-bind="{ checked: isChecked }" v-on:change="$emit('change', $event.target.checked)">
                </div>
                <div class="col">
                    <label for="checkbox" class="form-check-label">{{ label }}</label>
                </div>
            </div>
        </div>
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