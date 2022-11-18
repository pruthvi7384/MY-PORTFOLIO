<template>
  <div>
    <!-- Navigation Component Imported -->
    <Navigation></Navigation>
    <!--X- Navigation Component Imported -X-->
    <div class="container about mt-4">
      <div class="row headdings">
        <h1>ABOUT</h1>
        <p>Learn More About Me</p>
      </div>
      <div
        class="row about-info-row justify-content-center align-items-center mt-4"
      >
        <div class="col-xl-4 p-3">
          <div class="profile-img">
            <img
              class="img-fluid img-thumbnail"
              src="../assets/profile.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="col-xl-8 p-3">
          <h2>
            Hello I'm, <span>{{ JSON.profile.name }}</span>
          </h2>
          <div class="tag">
            <ul class="d-flex justify-content-start align-items-center">
              <li
                class="skill"
                v-for="(data, index) in JSON.profile.tag"
                :key="index"
              >
                {{ data }}
              </li>
            </ul>
          </div>
          <p>
            {{ JSON.profile.shortDescription }}
          </p>
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
  name: "About",
};
</script>

<style></style>
