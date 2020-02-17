<template>
  <div>
    <v-sheet
      v-if="!loaded"
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="px-3 pt-3 pb-3"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="600"
        type="card-heading,text,card,avatar"
      ></v-skeleton-loader>
    </v-sheet>

    <div v-else>
      <v-container fluid>
        <v-row dense>
          <v-col
            cols="8"
            class="mx-auto"
            v-for="(partido, index) in masReciente"
            :key="index"
          >
            <v-card>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    {{ partido.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-capitalize"
                    >{{ partido.date | date }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img
                class="white--text align-end"
                height="280px"
                :src="partido.thumbnail"
              >
                <div class="absolute">
                  <v-btn icon x-large color="error">
                    <v-icon large>fas fa-play</v-icon>
                  </v-btn>
                </div>
              </v-img>

              <v-card-title class="pb-0">Highlights</v-card-title>

              <v-container class="pt-0" fluid>
                <v-row>
                  <v-col cols="3" md="2">
                    <div class="text-center">
                      <v-progress-circular
                        size="50"
                        width="2"
                        color="error"
                        indeterminate
                      >
                        <v-avatar size="50">
                          <img
                            class="video-img"
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-avatar>
                      </v-progress-circular>
                      <p class="subtitle-2">holaaa</p>
                    </div>
                  </v-col>

                  <v-col cols="3" md="2">
                    <div class="text-center">
                      <v-avatar color="error" size="50">
                        <img
                          class="video-img"
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John"
                        />
                      </v-avatar>
                      <p class="subtitle-2">holaaa</p>
                    </div>
                  </v-col>

                  <v-col cols="3" md="2">
                    <div class="text-center">
                      <v-avatar color="error" size="50">
                        <img
                          class="video-img"
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John"
                        />
                      </v-avatar>
                      <p class="subtitle-2">holaaa</p>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-btn color="orange" text>
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      partidos: [],
      loaded: false
    };
  },
  mounted() {
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then(response => {
        this.loaded = true;
        this.partidos = response.data;
      })
      .catch(error => console.log(error));
  },
  computed: {
    masReciente() {
      return this.partidos.slice(0, 1);
    }
  },
  filters: {
    date(fecha) {
      moment.locale("es");
      return moment(fecha).format("dddd, MMMM - YYYY, h:mm a");
    }
  },
  inject: ["theme"]
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card {
  opacity: 0.6;
}

.v-card:hover {
  opacity: 1;
}
.video-img {
  border: 5px solid #ffffff00;
}
.absolute {
  top: 65px;
  position: absolute;
  z-index: 100;
  right: 0;
  margin: auto;
  left: 0;
}
</style>
