<template>
  <div class="d-flex justify-content-center">
    <div class="btn">
      <b-button variant="success me-3" v-if="page>1" @click="paginaAbajo()">Anterior</b-button>
      <b-button variant="success" v-if="page<=90" @click="paginaArriba()">Siguiente</b-button>
    </div>
  </div>
</template>

<script>


export default {
  name: "Pagination",
  props:["page"],    
  methods: {
    paginaArriba() {
        this.$store.dispatch('pageMove', this.page+1);
    },
    paginaAbajo() {
        this.$store.dispatch('pageMove', this.page-1)
    }
  }
}
</script>

<style scoped>

</style>