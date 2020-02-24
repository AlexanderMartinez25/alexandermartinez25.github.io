<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
    >
      <v-list dense>
        <v-list-item
          link
          v-for="(link, index) in links"
          :key="index"
          :to="link.ruta"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{ link.texto }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ejemplos Vue</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="p-4" fluid>
        <router-view> </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        { texto: "Futbol Api", icon: "fas fa-futbol", ruta: "/" },
        { texto: "Frutas", icon: "fas fa-apple-alt", ruta: "/frutas" }
      ],
      drawer: null
    };
  }
};
</script>

<style scope>
a:hover {
  text-decoration: none;
}
</style>
