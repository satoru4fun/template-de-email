<template>
    <div>
        <FrameTemplateEmailDns v-model="modeloEmail"></FrameTemplateEmailDns>
    </div>
</template>

<script>
import FrameTemplateEmailDns from '@/components/FrameTemplateEmailDns.vue'

export default {
    components: {
        FrameTemplateEmailDns
    }
}
</script>