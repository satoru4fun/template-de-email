<template>
  <div id="app">
    <FrameSeletorTemplateEmail v-model="templateEmailSelecionado" v-on:input="limpaModeloEmail"></FrameSeletorTemplateEmail>
    <FrameTemplateEmailDns v-if="templateEmailSelecionado==1" v-model="modeloEmail"></FrameTemplateEmailDns>
    <FrameTemplateEmailFirewall v-if="templateEmailSelecionado==2" v-model="modeloEmail"></FrameTemplateEmailFirewall>
    {{ modeloEmail }}
  </div>
</template>

<script>
import FrameSeletorTemplateEmail from './components/FrameSeletorTemplateEmail.vue'
import FrameTemplateEmailDns from './components/FrameTemplateEmailDns.vue'
import FrameTemplateEmailFirewall from './components/FrameTemplateEmailFirewall.vue'

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
    FrameTemplateEmailDns,
    FrameTemplateEmailFirewall
  },
  methods: {
    limpaModeloEmail: function () {
      this.modeloEmail = {}
    }
  }
}
</script>

<style>

</style>
