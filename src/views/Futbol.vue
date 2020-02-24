<template>
  <div>
    <v-sheet
      v-if="!loaded"
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="px-3 pt-3 pb-3"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="500"
        type="card-heading,list-item,card,avatar"
      ></v-skeleton-loader>
    </v-sheet>

    <div v-else>
      <v-container fluid>
        <v-row dense>
          <v-col md="6" xs="12" class="mx-auto">
            <v-card>
              <v-expansion-panels accordion hover>
                <v-expansion-panel v-for="(partido, index) in partidos" :key="index" >
                  
                  <v-expansion-panel-header disable-icon-rotate>

                    <template v-slot:actions>
                      <v-icon color="error">far fa-eye</v-icon>
                    </template>

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

                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <v-img
                      v-if="embed.length < 1"
                      class="white--text align-end"
                      height="280px"
                      :src="partido.thumbnail"
                    >
                      <div
                        @click="reproducir(partido.videos[0].embed)"
                        class="text-center absolute"
                      >
                        <v-btn icon x-large color="error">
                          <v-icon large>fas fa-play</v-icon>
                        </v-btn>
                      </div>
                    </v-img>
                    <span v-else v-html="embed"> </span>

                    <v-card-title>{{ tituloVideo }}</v-card-title>

                    <v-container class="py-0 px-5" fluid>
                      <v-card class="d-flex flex-row mr-4" flat tile>
                        <div
                          v-for="(momentoDestacado, index) in partido.videos"
                          :key="index"
                          class="text-center mr-4"
                        >
                          <v-btn
                            text
                            icon
                            color="indigo"
                            @click="showTitulo(momentoDestacado.title)"
                          >
                            <v-progress-circular
                              size="50"
                              width="2"
                              color="error"
                              indeterminate
                            >
                              <v-avatar size="50">
                                <img
                                  class="video-img"
                                  :src="partido.thumbnail"
                                  alt="John"
                                />
                              </v-avatar>
                            </v-progress-circular>
                          </v-btn>
                          <p class="subtitle-2 mt-4">
                            {{ momentoDestacado.title }}
                          </p>
                        </div>
                      </v-card>
                    </v-container>

                    <v-card-subtitle class="pt-0 error--text">
                      {{ partido.competition.name }}
                    </v-card-subtitle>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
import _ from "lodash";

export default {
  data() {
    return {
      partidos: [],
      loaded: false,
      embed: [],
      tituloVideo: ""
    };
  },
  mounted() {
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then(response => {
        this.loaded = true;
        this.partidos = response.data;
        this.tituloVideo = response.data[0].videos[0].title;
        // this.videos = _.mapValues(this.partidos, "videos");
      })
      .catch(error => console.log(error));
  },
  computed: {
    masReciente() {
      return _.slice(this.partidos, 0, 1);
    }
    // primeros() {
    //   return _.slice(this.partidos, 0, 3);
    // }
    // galleryVideos() {
    //   let arrVideos = _.mapValues(this.primeros, "videos");
    //  _.forEach(this.partidos, function(value,key) {
    //       console.log(value.embed);

    //        this.videos.push({
    //            'id': key,
    //            'embed': value.embed
    //        }
    //        );
    //     });

    //   return _.mapValues(arrVideos, "embed");
    // }
  },
  methods: {
    reproducir(video) {
      this.embed = video;
    },
    showTitulo(title) {
      this.tituloVideo = title;
    }
  },
  filters: {
    date(fecha) {
      moment.locale("es");
      return moment(fecha).format("dddd, D MMMM - YYYY, h:mm a");
    }
  },
  inject: ["theme"]
};
</script>

<style scoped>
.v-card .v-icon {
  transition: opacity 0.1s ease-in-out;
  opacity: 0.6;
}
.v-card .v-icon:hover {
  opacity: 1;
}
.video-img {
  border: 5px solid #ffffff00;
}
.absolute {
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;
}
</style>
