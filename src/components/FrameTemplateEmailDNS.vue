<template>
    <div>
        <div>
            <TextboxCname v-model="cname" v-on:input="$emit('input', modeloEmail)"></TextboxCname>
        </div>
        <div>
            <CheckboxHomologacao v-model="homologacaoChecado" v-on:change="$emit('input', modeloEmail)"></CheckboxHomologacao>
        </div>
    </div>
<!--     
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="hom" v-on:change="dns_gerar" v-model="modeloFormularioDNS.homologacaoChecado">
          <label class="form-check-label" for="hom">Hom</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="dev" v-on:change="dns_gerar" v-model="modeloFormularioDNS.desenvolvimentoChecado">
          <label class="form-check-label" for="dev">Dev</label>
        </div>
        <div class="form-group">
          <label for="subdomain">Subdomínio:</label>
          <input type="text" id="subdomain" name="subdomain" class="form-control" 
                v-on:keyup="dns_gerar" v-model="modeloFormularioDNS.subdomain">
        </div>
        <div class="form-group">
          <label for="dnsinterno">DNS interno:</label>
          <input type="text" id="dnsinterno" name="dnsinterno" class="form-control" 
                v-on:keyup="dns_gerar" v-model="modeloFormularioDNS.DNSInterno">
        </div>
        <div class="form-group">
          <label for="dnsexterno">DNS externo:</label>
          <input type="text" id="dnsexterno" name="dnsexterno" class="form-control" 
                v-on:keyup="dns_gerar" v-model="modeloFormularioDNS.DNSExterno">
        </div>
    </div> -->
</template>

<script>
import TextboxCname from './TextboxCname.vue'
import CheckboxHomologacao from './CheckboxHomologacao.vue'

export default {
    components: {
        TextboxCname,
        CheckboxHomologacao
    },
    data () {
        return {
            cname: null,
            subdominio: null,
            homologacaoChecado: true,
            desenvolvimentoChecado: true,
            dnsInterno: null,
            dnsExterno: null
        }
    },
    computed: {
        modeloEmail: function () {
            var modeloEmail = {
                assunto: null,
                corpo: null
            }
            modeloEmail.assunto = (this.cnameLimpo) ? 'Solicitação de DNS - ' + this.cnameLimpo.toUpperCase() : ''
            modeloEmail.corpo = (this.url && this.homologacao && this.desenvolvimento && this.dnsInternoLimpo && this.dnsExternoLimpo) ? 'Prezada(o),'
                + '<br><br>Favor alterar o CNAME:<ul><li>'
                + this.url
                + this.homologacao
                + this.desenvolvimento
                + '</li></ul><br>Para apontar para:<ul>'
                + this.dnsInternoLimpo
                + this.dnsExternoLimpo
                + '</ul><br>' : ''
            return modeloEmail
        },
        url: function () {
            return (this.cnameLimpo && this.subdominioLimpo) ? this.cnameLimpo + '" no subdomínio "' + this.subdominioLimpo + '"' : ''
        },
        cnameLimpo: function () {
            return (this.cname) ? this.cname.trim() : ''
        },
        subdominioLimpo: function () {
            return (this.subdominio) ? this.subdominio.trim() : ''
        },
        homologacao: function () {
            return (this.homologacaoChecado) ? ',</li><li>"hom-' + this.url : ''
        },
        desenvolvimento: function () {
            return (this.desenvolvimentoChecado) ? ',</li><li>"dev-' + this.url : ''
        },
        dnsInternoLimpo: function () {
            return (this.dnsInterno) ? '<li>DNS interno = ' + this.dnsInterno.trim() + '</li>' : ''
        },
        dnsExternoLimpo: function () {
            return (this.dnsExterno) ? '<li>DNS externo = ' + this.dnsExterno.trim() + '</li>' : ''
        }
    }
}
</script>

<style scoped>

</style>