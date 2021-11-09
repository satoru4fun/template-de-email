<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Textbox label="CNAME" v-model="cname" v-on:input="$emit('input', modeloEmail)"></Textbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Checkbox label="Pré Produção" :isChecked="preProducaoChecado" v-model="preProducaoChecado" v-on:change="$emit('input', modeloEmail)"></Checkbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Checkbox label="Homologação" :isChecked="homologacaoChecado" v-model="homologacaoChecado" v-on:change="$emit('input', modeloEmail)"></Checkbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Checkbox label="Desenvolvimento" :isChecked="desenvolvimentoChecado" v-model="desenvolvimentoChecado" v-on:change="$emit('input', modeloEmail)"></Checkbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Textbox label="Subdomínio:" :defaultValue="subdominio" v-model="subdominio" v-on:input="$emit('input', modeloEmail)"></Textbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Textbox label="DNS interno:" :defaultValue="dnsInterno" v-model="dnsInterno" v-on:input="$emit('input', modeloEmail)"></Textbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Textbox label="DNS externo:" :defaultValue="dnsExterno" v-model="dnsExterno" v-on:input="$emit('input', modeloEmail)"></Textbox>
            </div>
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
            preProducaoChecado: true,
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
            modeloEmail.assunto = (this.cnameComputado) ? 'Solicitação de DNS - ' + this.cnameComputado.toUpperCase() : ''
            modeloEmail.corpo = (this.url && this.dnsInternoComputado && this.dnsExternoComputado) ? 'Prezada(o),'
                + '<br><br>Favor criar/alterar o CNAME:<ul>'
                + this.producao
                + this.preProducao
                + this.homologacao
                + this.desenvolvimento
                + '</ul><br>Para apontar para:<ul>'
                + this.dnsInternoComputado
                + this.dnsExternoComputado
                + '</ul><br>' : ''
            return modeloEmail
        },
        url: function () {
            return (this.cnameComputado && this.subdominioComputado) ? this.cnameComputado + '" no subdomínio "' + this.subdominioComputado + '"' : ''
        },
        cnameComputado: function () {
            return (this.cname) ? this.cname.trim() : ''
        },
        subdominioComputado: function () {
            return (this.subdominio) ? this.subdominio.trim() : ''
        },
        producao: function () {
            return '<li>"' + this.url + '</li>'
        },
        preProducao: function () {
            return (this.preProducaoChecado) ? '<li>"pre-' + this.url + '</li>' : ''
        },
        homologacao: function () {
            return (this.homologacaoChecado) ? '<li>"hom-' + this.url + '</li>' : ''
        },
        desenvolvimento: function () {
            return (this.desenvolvimentoChecado) ? '<li>"dev-' + this.url + '</li>' : ''
        },
        dnsInternoComputado: function () {
            return (this.dnsInterno) ? '<li>DNS interno = ' + this.dnsInterno.trim() + '</li>' : ''
        },
        dnsExternoComputado: function () {
            return (this.dnsExterno) ? '<li>DNS externo = ' + this.dnsExterno.trim() + '</li>' : ''
        }
    }
}
</script>

<style scoped>

</style>
