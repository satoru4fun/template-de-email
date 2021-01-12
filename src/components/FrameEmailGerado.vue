<template>
    <div class="container">
        <div class="row">
            <div class="col">
                {{ titulo }}
            </div>
        </div>
        <div class="row">
            <div class="col-1">
                <label for="emailSuporte">Para:</label>
            </div>
            <div id="emailSuporte" class="col-11">
                {{ emailSuporte }}
            </div>
        </div>
        <div class="row">
            <div class="col-1">
                <label for="emailCopia">CC:</label>
            </div>
            <div id="emailCopia" class="col-11">
                <div class="row">
                    <div class="col">
                        {{ emailInfraestruturaCentralIT }}
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        {{ emailDISIS }}
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        {{ emailSolicitante }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-1">
                <label for="assunto">Assunto:</label>
            </div>
            <div id="assunto" class="col-11" v-html="modeloEmail.assunto">
            </div>
        </div>
        <div class="row">
            <div class="col-1">
                <label for="corpo">Corpo:</label>
            </div>
            <div id="corpo" class="col-11" v-html="modeloEmail.corpo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modeloEmail: {
            assunto: String,
            corpo: String
        }
    },
    data: function () {
        return {
            titulo: 'Email',
            emailSuporte: 'suporte@sme.prefeitura.sp.gov.br',
            emailInfraestruturaCentralIT: 'infraestrutura.smesp@centralit.com.br',
            emailDISIS: 'idscotic@sme.prefeitura.sp.gov.br',
            emailSolicitante: 'solicitante(s)'
        }
    }
}
</script>

<style scoped>

</style>