<template>
  <div id="app">
    <the-header />
    <div class="container is-fluid">
      <div class="container">
        <div class="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
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
