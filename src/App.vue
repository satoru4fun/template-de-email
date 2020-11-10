<template>
  <div id="app">
    <FrameSeletorTemplateEmail v-model="templateEmailSelecionado" v-on:input="limpaModeloEmail"></FrameSeletorTemplateEmail>
    <FrameTemplateEmailDns v-if="templateEmailSelecionado==1" v-model="modeloEmail"></FrameTemplateEmailDns>
    <FrameTemplateEmailFirewall v-if="templateEmailSelecionado==2" v-model="modeloEmail"></FrameTemplateEmailFirewall>
    <FrameTemplateEmailResultadoDiligencia v-if="templateEmailSelecionado==3" v-model="modeloEmail"></FrameTemplateEmailResultadoDiligencia>
    <FrameTemplateEmailConviteGithub v-if="templateEmailSelecionado==4" v-model="modeloEmail"></FrameTemplateEmailConviteGithub>
    {{ modeloEmail }}
  </div>
</template>

<script>
import FrameSeletorTemplateEmail from './components/FrameSeletorTemplateEmail.vue'
import FrameTemplateEmailDns from './components/FrameTemplateEmailDns.vue'
import FrameTemplateEmailFirewall from './components/FrameTemplateEmailFirewall.vue'
import FrameTemplateEmailResultadoDiligencia from './components/FrameTemplateEmailResultadoDiligencia.vue'
import FrameTemplateEmailConviteGithub from './components/FrameTemplateEmailConviteGithub.vue'

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
    FrameTemplateEmailFirewall,
    FrameTemplateEmailResultadoDiligencia,
    FrameTemplateEmailConviteGithub
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
