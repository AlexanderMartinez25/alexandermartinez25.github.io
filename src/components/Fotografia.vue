<template>
  <div>
    <h3>
      Foto desde componente:

      <span v-if="$route.params.id > -1">
        {{ $route.params.id }}

        <div class="row row-cols-1 row-cols-md-2 justify-content-center">
          <div class="col mb-4">
            <div class="card">
              <img
                :src="fotos[$route.params.id]"
                class="card-img-top"
                alt="foto"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text h6">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Foto",
  props: ["fotos"],
  methods: {
    imagen() {
      console.log(this.$route.params.id);

      return this.$route.params.id ? this.$route.params.id : 0;
    }
  }
};
</script>
