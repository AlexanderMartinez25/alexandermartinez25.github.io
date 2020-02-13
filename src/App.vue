<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-brand :to="{ name: 'frutas' }">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'frutas' }">Frutas</b-nav-item>
            <b-nav-item :to="{ name: 'fotos' }">Fotos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<style>
.fade-enter-active {
  transition: all 0.1s ease;
}
.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.4, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
