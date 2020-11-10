<template>
    <div>
        <div>
            <SeletorGenero v-model="generoSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorGenero>
        </div>
        <div>
            <SeletorPerfil v-model="perfilSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorPerfil>
        </div>
        <div>
            <SeletorResultado v-model="resultadoSelecionado" v-on:input="$emit('input', modeloEmail)"></SeletorResultado>
        </div>
        <div>
            <Textbox label="Observação:" v-model="observacao" v-on:input="$emit('input', modeloEmail)"></Textbox>
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
            modeloEmail.corpo = (this.generoSelecionado && this.resultadoSelecionado && this.experienciaComputada) ? this.saudacaoComputada + ','
                      + "<br><br>O resultado da Diligência Prévia de Capacidade Técnica foi \"<b>" + this.resultadoSelecionado + "</b>\".<br><br>"
                      + this.generoSelecionado.toUpperCase() + " funcionári" + this.generoSelecionado + " indicad" + this.generoSelecionado
                      + " pela AMcom possui formação superior completa e " + this.experienciaComputada
                      + ".<br><br>Observações:<ul><li>"
                      + this.observacaoComputada
                              + "</li></ul><br>" : ''
            return modeloEmail
        },
        saudacaoComputada: function ()  {
            var d = new Date();
            var horas = d.getHours();
            if     (horas < 12){ return "Bom dia" }
            else if(horas < 19){ return "Boa tarde" }
            else               { return "Boa noite" }
        },
        experienciaComputada: function () {
            return 'experiência na área técnica de TI ou correlatas'
        },
        observacaoComputada: function () {
            return this.observacao.trim()
        }
    }
}
</script>

<style scoped>

</style>