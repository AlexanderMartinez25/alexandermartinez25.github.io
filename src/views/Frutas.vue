<template>
  <div>
    <Cabecera />
    <Lista />
  </div>
</template>

<script>
import Cabecera from "@/components/Cabecera.vue";
import Lista from "@/components/Lista.vue";
export default {
  name: "frutas",
  components: {
    Cabecera,
    Lista
  }
};
</script>
