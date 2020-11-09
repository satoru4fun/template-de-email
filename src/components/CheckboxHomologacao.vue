<template>
    <div>
        <label>
            Homologação
            <input type="checkbox" id="homologacao" v-on:change="$emit('change', $event.target.checked)">
        </label>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'checked',
        event: 'change'
    }
}
</script>

<style scoped>

</style>