<template>
  <div id="app">
    <FrameSeletorTemplateEmail v-model="templateEmailSelecionado"></FrameSeletorTemplateEmail>
    <FrameSelectorTemplateEmailDNS v-if="templateEmailSelecionado==1" v-model="modeloEmail"></FrameSelectorTemplateEmailDNS>
    {{ modeloEmail }}
  </div>
</template>

<script>
import FrameSeletorTemplateEmail from './components/FrameSeletorTemplateEmail.vue'
import FrameSelectorTemplateEmailDNS from './components/FrameTemplateEmailDNS.vue'

export default {
  name: 'App',
  data () {
    return {
      templateEmailSelecionado: null,
      modeloEmail: {
      }
    }
  },
  components: {
    FrameSeletorTemplateEmail,
    FrameSelectorTemplateEmailDNS
  }
}
</script>

<style>

</style>
