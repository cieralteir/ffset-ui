<template>
  <div id="app">
    <the-header />
    <div class="container is-fluid">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>
