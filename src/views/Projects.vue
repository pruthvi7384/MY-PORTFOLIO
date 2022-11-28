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
      <div class="row mt-3 justify-content-center">
        <div
          class="col-xl-4 p-3"
          v-for="(data, index) in JSON.Projects"
          :key="index"
        >
          <div class="project_card">
            <img :src="data.image" alt="" />
            <div class="project_info">
              <h3>{{ data.title }}</h3>
              <ul>
                <li v-for="(tech, ind) in data.technology" :key="ind">
                  {{ tech }}
                </li>
              </ul>
              <div class="link d-flex justify-content-center">
                <a :href="data.githubLink" target="__blank"
                  ><button class="btn">
                    GitHub
                    <span><i class="fab fa-github"></i></span></button
                ></a>
                <a :href="data.liveDemoLink" target="__blank"
                  ><button class="btn">
                    Live Preview
                    <span><i class="fad fa-external-link"></i></span></button
                ></a>
              </div>
            </div>
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
  name: "Projects",
};
</script>

<style></style>
