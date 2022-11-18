<template>
  <div>
    <!-- Navigation Bar Component Imported -->
    <Navigation></Navigation>
    <!--X- Navigation Bar Component Imported -X-->
    <div class="container project mt-4">
      <div class="row headdings">
        <h1>PROJECT</h1>
        <p>My Work</p>
      </div>
      <div class="row">
        <div class="col-xl-4"></div>
        <div class="col-xl-8"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: { Navigation },
  name: "Projects",
};
</script>

<style></style>
