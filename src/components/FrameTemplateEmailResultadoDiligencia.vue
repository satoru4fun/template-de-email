<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <SeletorGenero v-model="generoSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorGenero>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <SeletorPerfil v-model="perfilSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorPerfil>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <SeletorResultado v-model="resultadoSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorResultado>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Textbox label="Observação:" v-model="observacao" v-on:input="$emit('input', modeloEmail)"></Textbox>
            </div>
        </div>
    </div>
</template>

<script>
import SeletorGenero from './SeletorGenero.vue'
import SeletorPerfil from './SeletorPerfil.vue'
import SeletorResultado from './SeletorResultado.vue'
import Textbox from './Textbox.vue'

export default {
    components: {
        SeletorGenero,
        SeletorPerfil,
        SeletorResultado,
        Textbox
    },
    data () {
        return {
            generoSelecionado: null,
            perfilSelecionado: null,
            resultadoSelecionado: null,
            observacao: 'A DPC não dispensa da apresentação dos documentos comprobatórios.'
        }
    },
    computed: {
        modeloEmail: function () {
            var modeloEmail = {
                assunto: null,
                corpo: null
            }
            modeloEmail.assunto = 'RES: Diligência Prévia de Capacidade Técnica'
            modeloEmail.corpo = (this.resultadoSelecionadoComputadao && this.generoSelecionadoComputado && this.experienciaExigidaComputada) ?
                this.saudacaoComputada
                + ',<br><br>O resultado da Diligência Prévia de Capacidade Técnica foi "<b>' + this.resultadoSelecionadoComputadao
                + '</b>".<br><br>'
                + this.generoSelecionadoComputado.toUpperCase()
                + ' funcionári' + this.generoSelecionadoComputado
                + ' indicad' + this.generoSelecionadoComputado
                + ' pela AMcom possui formação superior completa e ' + this.experienciaExigidaComputada
                + '.<br><br>Observações:<ul><li>' + this.observacaoComputada
                + "</li></ul><br>"
                : ''
            return modeloEmail
        },
        saudacaoComputada: function ()  {
            var d = new Date();
            var horas = d.getHours();
            if     (horas < 12){ return 'Bom dia' }
            else if(horas < 19){ return 'Boa tarde' }
            else               { return 'Boa noite' }
        },
        resultadoSelecionadoComputadao: function () {
            return JSON.parse(this.resultadoSelecionado).descricao
        },
        generoSelecionadoComputado: function () {
            return JSON.parse(this.generoSelecionado).artigo
        },
        experienciaExigidaComputada: function () {
            return JSON.parse(this.perfilSelecionado).experienciaExigida
        },
        observacaoComputada: function () {
            return this.observacao.trim()
        }
    }
}
</script>

<style scoped>

</style>