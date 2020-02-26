<template>
  <div>
    <v-expansion-panel-content>
      <v-img
        v-if="videoDisplay.length < 1"
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

      <span v-else v-html="videoDisplay"></span>

      <v-container class="p-0" fluid>
        <v-card-title>{{ videoTitle }}</v-card-title>

        <v-card-subtitle class="pt-0 error--text">
          {{ partido.competition.name }}
        </v-card-subtitle>

        <div class="d-flex flex-row mx-5" flat tile>
          <Highlights
            v-for="(momentoDestacado, index) in partido.videos"
            :key="index"
            class="text-center mr-3 "
            :video="momentoDestacado"
            :imagen="partido.thumbnail"
            v-on:change-video-display="changeVideoDisplay"
          ></Highlights>
        </div>
      </v-container>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import Highlights from "@/components/Highlights.vue";
export default {
  name: "VideosContent",
  components: {
    Highlights
  },
  props: ["partido", "imagen"],
  data() {
    return {
      videoTitle: "",
      videoDisplay: ""
    };
  },
  methods: {
    changeTitle(title) {
      this.videoTitle = title;
    },
    reproducir(video) {
      this.videoDisplay = video;
    },
    changeVideoDisplay(params) {
      const { title, embed } = params;
      this.videoTitle = title;
      this.videoDisplay = embed;
    }
  },
  mounted() {
    this.videoTitle = this.partido.videos[0].title;
  }
};
</script>

<style>
.video-img {
  border: 5px solid #ffffff00;
}
.absolute {
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;
}
.v-card .v-icon {
  transition: opacity 0.1s ease-in-out;
  opacity: 0.6;
}
.v-card .v-icon:hover {
  opacity: 1;
}
.v-expansion-panel-content__wrap {
  padding: 0 0 0 0;
}
</style>
