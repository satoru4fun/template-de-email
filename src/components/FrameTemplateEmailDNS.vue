<template>
    <div>
        DNS
        <label for="cname">CNAME:</label>
        <input type="text" id="cname" v-on:input="$emit('input', modeloEmail)">
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
export default {
    data () {
        return {
        }
    },
    computed: {
        modeloEmail: function () {
            var modeloEmail = {
                assunto: null,
                corpo: null
            }
            modeloEmail.assunto = 'Assunto'
            modeloEmail.corpo = 'Corpo'
            return modeloEmail
        }
    }
}
</script>

<style scoped>

</style>