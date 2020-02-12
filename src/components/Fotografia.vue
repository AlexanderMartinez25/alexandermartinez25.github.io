<template>
  <div>
    <h3>Foto desde componente: {{ $route.params.id }}</h3>

    <div class="row row-cols-1 row-cols-md-2 justify-content-center">
      <div class="col mb-4">
        <div class="card">
          <img :src="fotos[$route.params.id]" class="card-img-top" alt="foto" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foto",
  props: ["fotos"]
};
</script>
