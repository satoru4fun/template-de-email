<template>
  <div class="container" id="app">
    <FrameSeletorTemplateEmail v-model="templateEmailSelecionado" v-on:input="limpaModeloEmail"></FrameSeletorTemplateEmail>
    <FrameTemplateEmailDns v-if="templateEmailSelecionado==1" v-model="modeloEmail"></FrameTemplateEmailDns>
    <FrameTemplateEmailFirewall v-if="templateEmailSelecionado==2" v-model="modeloEmail"></FrameTemplateEmailFirewall>
    <FrameTemplateEmailResultadoDiligencia v-if="templateEmailSelecionado==3" v-model="modeloEmail"></FrameTemplateEmailResultadoDiligencia>
    <FrameTemplateEmailConviteGithub v-if="templateEmailSelecionado==4" v-model="modeloEmail"></FrameTemplateEmailConviteGithub>
    <FrameEmailGerado v-if="modeloEmail" :modeloEmail="modeloEmail"></FrameEmailGerado>
  </div>
</template>

<script>
import FrameSeletorTemplateEmail from './components/FrameSeletorTemplateEmail.vue'
import FrameTemplateEmailDns from './components/FrameTemplateEmailDns.vue'
import FrameTemplateEmailFirewall from './components/FrameTemplateEmailFirewall.vue'
import FrameTemplateEmailResultadoDiligencia from './components/FrameTemplateEmailResultadoDiligencia.vue'
import FrameTemplateEmailConviteGithub from './components/FrameTemplateEmailConviteGithub.vue'
import FrameEmailGerado from './components/FrameEmailGerado.vue'

export default {
  name: 'App',
  data () {
    return {
      templateEmailSelecionado: null,
      modeloEmail: null
    }
  },
  components: {
    FrameSeletorTemplateEmail,
    FrameTemplateEmailDns,
    FrameTemplateEmailFirewall,
    FrameTemplateEmailResultadoDiligencia,
    FrameTemplateEmailConviteGithub,
    FrameEmailGerado
  },
  methods: {
    limpaModeloEmail: function () {
      this.modeloEmail = null
    }
  }
}
</script>

<style>

</style>
