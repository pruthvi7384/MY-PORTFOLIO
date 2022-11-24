<template>
  <div>
    <!-- Navigation Bar Component Imported -->
    <navigation></navigation>
    <!--X- Navigation Bar Component Imported -X-->
    <div class="container contact mt-4">
      <div class="row headdings">
        <h1>CONTACT</h1>
        <p>Contact Me</p>
      </div>
      <div class="row mt-1 justify-content-center p-2">
        <div
          class="col-xl-4 contact_details"
          v-for="(data, index) in JSON.ContactDetails"
          :key="index"
        >
          <i :class="data.icon"></i>
          <div class="info">
            <h2>{{ data.heading }}</h2>
            <h3 class="text-break">{{ data.value }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import JSON from "../jsonData/profile.json";
export default {
  components: { Navigation },
};
</script>
