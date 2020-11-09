<template>
    <div>
        <label>
            {{ label }}
            <input type="text" v-on:input="$emit('input', $event.target.value)">
        </label>
    </div>
</template>

<script>
export default {
    props: {
        label: String
    }
}
</script>

<style scoped>

</style>