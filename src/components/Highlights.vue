<template>
  <div>
    <v-btn
      text
      icon
      color="indigo"
      @click="$emit('change-video-display', video), active()"
    >
      <v-progress-circular
        size="50"
        width="2"
        color="error"
        value="100"
        :indeterminate="indeterminate"
      >
        <v-avatar size="50">
          <img class="video-img" :src="imagen" alt="video" />
        </v-avatar>
      </v-progress-circular>
    </v-btn>
    <p class="subtitle-2 mt-4">{{ video.title }}</p>
  </div>
</template>

<script>
export default {
  name: "Highlights",
  props: ["video", "position", "imagen"],
  data() {
    return {
      videoTitle: "",
      indeterminate: false
    };
  },
  methods: {
    active() {
      this.indeterminate = true;
    }
  }
};
</script>
