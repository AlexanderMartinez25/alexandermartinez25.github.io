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
        "https://i.picsum.photos/id/110/500/200.jpg",
        "https://i.picsum.photos/id/250/500/200.jpg",
        "https://i.picsum.photos/id/378/500/200.jpg"
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
