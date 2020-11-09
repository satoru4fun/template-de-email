<template>
    <div>
        <div>
            <SeletorGenero v-model="generoSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorGenero>
        </div>
        <div>
            <Textbox label="Destino:" v-model="enderecoDestino" v-on:input="$emit('input', modeloEmail)"></Textbox>
        </div>
        <div>
            <Textbox label="Porta/Protocolo:" v-show="!icmpChecado" v-model="portaProtocolo" v-on:input="$emit('input', modeloEmail)"></Textbox>
        </div>
        <div>
            <Checkbox label="ICMP" :isChecked="icmpChecado" v-model="icmpChecado" v-on:change="$emit('input', modeloEmail)"></Checkbox>
        </div>
    </div>
</template>

<script>
import SeletorGenero from './SeletorGenero.vue'
import Textbox from './Textbox.vue'
import Checkbox from './Checkbox.vue'

export default {
    components: {
        SeletorGenero,
        Textbox,
        Checkbox
    },
    data () {
        return {
            enderecoOrigem: null,
            enderecoDestino: null,
            portaProtocolo: null,
            icmpChecado: false
        }
    },
    computed: {
        modeloEmail: function () {
            var modeloEmail = {
                assunto: null,
                corpo: null
            }
            modeloEmail.assunto = (this.enderecoOrigemComputado && this.enderecoDestinoComputado) ? 'Solicitação de Liberação no Firewall - '
                + this.enderecoOrigemComputado + ' > '
                + this.enderecoDestinoComputado : ''
            modeloEmail.corpo = (this.enderecoOrigemComputado && this.enderecoDestinoComputado && this.portaProtocoloComputado) ? 'Prezada(o),<br><br>Solicito liberação de acesso:<ul><li>Origem: '
                + this.enderecoOrigemComputado
                + ';</li><li>Destino: '
                + this.enderecoDestinoComputado
                + ';</li><li>Porta: '
                + this.portaProtocoloComputado
                + '.</li></ul><br>' : ''
            return modeloEmail
        },
        enderecoOrigemComputado: function () {
            return this.enderecoOrigem.toUpperCase().trim()
        },
        enderecoDestinoComputado: function () {
            return this.enderecoDestino.toUpperCase().trim()
        },
        portaProtocoloComputado: function () {
            return (this.icmpChecado) ? '<li>Protocolo: ICMP</li>' : this.portaProtocolo.trim()
        }
    }
}
</script>

<style scoped>

</style>