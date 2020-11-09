<template>
    <div>
        <label>
            CNAME:
            <input type="text" v-on:input="$emit('input', $event.target.value)">
        </label>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>