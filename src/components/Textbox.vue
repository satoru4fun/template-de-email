<template>
    <div>
        <label>
            {{ label }}
            <input type="text" :value="defaultValue" v-on:input="$emit('input', $event.target.value)">
        </label>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        defaultValue: String
    }
}
</script>

<style scoped>

</style>