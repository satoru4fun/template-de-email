<template>
    <div>
        <div>
            <Textbox label="CNAME" v-model="cname" v-on:input="$emit('input', modeloEmail)"></Textbox>
        </div>
        <div>
            <Checkbox label="Homologação" :isChecked="homologacaoChecado" v-model="homologacaoChecado" v-on:change="$emit('input', modeloEmail)"></Checkbox>
        </div>
        <div>
            <Checkbox label="Desenvolvimento" :isChecked="desenvolvimentoChecado" v-model="desenvolvimentoChecado" v-on:change="$emit('input', modeloEmail)"></Checkbox>
        </div>
        <div>
            <Textbox label="Subdomínio:" :defaultValue="subdominio" v-model="subdominio" v-on:input="$emit('input', modeloEmail)"></Textbox>
        </div>
        <div>
            <Textbox label="DNS interno:" :defaultValue="dnsInterno" v-model="dnsInterno" v-on:input="$emit('input', modeloEmail)"></Textbox>
        </div>
        <div>
            <Textbox label="DNS externo:" :defaultValue="dnsExterno" v-model="dnsExterno" v-on:input="$emit('input', modeloEmail)"></Textbox>
        </div>
    </div>
</template>

<script>
import Textbox from './Textbox.vue'
import Checkbox from './Checkbox.vue'

export default {
    components: {
        Textbox,
        Checkbox
    },
    data () {
        return {
            cname: null,
            subdominio: 'sme.prefeitura.sp.gov.br',
            homologacaoChecado: true,
            desenvolvimentoChecado: true,
            dnsInterno: '10.50.1.189',
            dnsExterno: '186.239.235.118'
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