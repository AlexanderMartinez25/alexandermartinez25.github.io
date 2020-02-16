<template>
  <div>
    <h1>Galeria de Fotos</h1>

    <router-link
      :to="{ name: 'fotos', params: { id: index } }"
      v-for="(item, index) of fotosAreglos"
      :key="index"
    >
      <button class="btn btn-secondary">Foto {{ index + 1 }}</button>
    </router-link>
    <Foto :fotos="fotosAreglos" />

    <button class="btn btn-primary" @click="frutas">Frutas</button>
    <button class="btn btn-danger" @click="anterior">Anterior</button>
    <button class="btn btn-success" @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue";

export default {
  components: {
    Foto
  },
  data() {
    return {
      fotosAreglos: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
        "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      ]
    };
  },
  methods: {
    frutas() {
      return this.$router.push("/frutas");
    },
    anterior() {
      return this.$router.go(-1);
    },
    siguiente() {
      return this.$router.go(1);
    }
  }
};
</script>
