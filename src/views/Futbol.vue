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
                <v-expansion-panel
                  v-for="(partido, index) in partidos"
                  :key="index"
                >
                  <v-expansion-panel-header disable-icon-rotate>
                    <template v-slot:actions>
                      <v-icon color="error">far fa-eye</v-icon>
                    </template>

                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title class="headline">{{
                          partido.title
                        }}</v-list-item-title>

                        <v-list-item-subtitle class="text-capitalize">{{
                          partido.date | date
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-expansion-panel-header>

                  <VideosContent :partido="partido"></VideosContent>
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
// import _ from "lodash";
import VideosContent from "@/components/VideosContent.vue";

export default {
  components: {
    VideosContent
  },
  data() {
    return {
      partidos: [],
      loaded: false,
      embed: []
      // tituloVideo: ""
    };
  },
  mounted() {
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then(response => {
        this.loaded = true;
        this.partidos = response.data;
        // this.tituloVideo = response.data[0].videos[0].title;
        // this.videos = _.mapValues(this.partidos, "videos");
      })
      .catch(error => console.log(error));
  },
  computed: {
    // masReciente() {
    //   return _.slice(this.partidos, 0, 1);
    // }
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
    // reproducir(video) {
    //   this.embed = video;
    // },
    // changeTitleVideo(title) {
    // this.tituloVideo = title;
    // }
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

<style scoped></style>
