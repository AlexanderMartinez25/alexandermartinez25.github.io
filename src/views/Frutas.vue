<template>
  <div class="container">
    <Cabecera />
    <Lista />
    <v-btn color="warning" dark>Normal Button</v-btn>
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
