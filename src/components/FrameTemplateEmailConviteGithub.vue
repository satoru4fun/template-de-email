<template>
    <div>
    </div>
</template>

<script>
export default {
    mounted: function () {        
        var modeloEmail = {
            assunto: null,
            corpo: null
        }
        var saudacaoComputada = function ()  {
            var d = new Date()
            var horas = d.getHours()
            if     (horas < 12){ return 'Bom dia' }
            else if(horas < 19){ return 'Boa tarde' }
            else               { return 'Boa noite' }
        }        
        
        modeloEmail.assunto = 'RES: Acesso GitHub'
        modeloEmail.corpo = saudacaoComputada() + ','
            + '<br><br>Enviado o convite para contribuir na organização do GitHub.'
            + '<br>Quando aceitar, favor, sinalizar para conceder os acessos.'
            + '<br>'

        this.$emit('input', modeloEmail)
    }
}
</script>

<style scoped>

</style>