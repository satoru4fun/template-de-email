<template>
    <div>
        <div>
            {{ titulo }}
        </div>
        <label>
            Para:
            <div>
                {{ emailSuporte }}
            </div>
        </label>
        <label>
            CC:
            <div>
                {{ emailInfraestruturaCentralIT }}
            </div>
            <div>
                {{ emailDISIS }}
            </div>
            <div>
                {{ emailSolicitante }}
            </div>
        </label>
        <label>
            Assunto:
            <div v-html="modeloEmail.assunto">
            </div>
        </label>
        <label>
            Corpo:
            <div v-html="modeloEmail.corpo">
            </div>
        </label>
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