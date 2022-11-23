<template>
  <div>
    <!-- Navigation Bar Component Imported -->
    <navigation></navigation>
    <!--X- Navigation Bar Component Imported -X-->
    <div class="container resume mt-4">
      <div class="row headdings">
        <h1>RESUME</h1>
        <p>Check My Resume</p>
      </div>
      <div class="row summary mt-3">
        <div class="col-xl-12">
          <h2>Summary</h2>
          <div class="resume-iteam">
            <p>{{ JSON.About }}</p>
          </div>
          <!-- <p>{{ JSON.About }}</p> -->
        </div>
      </div>
      <div class="row background mt-3">
        <div class="col-xl-6 p-3">
          <h2>Education</h2>
          <div
            class="resume-iteam"
            v-for="(data, index) in JSON.Education"
            :key="index"
          >
            <h3 class="text-uppercase">
              {{ data.title }} , {{ data.specialization }}
            </h3>
            <div class="box">
              <p>
                <span>{{ data.year }}</span>
              </p>
            </div>
            <h4 class="text-uppercase">{{ data.univercity }}</h4>
            <h4>
              {{ data.collage }}
            </h4>
            <h5>
              {{ data.percentageInfo.type }}
              <span>{{ data.percentageInfo.value }}</span>
            </h5>
          </div>
        </div>
        <div class="col-xl-6 p-3">
          <h2>Past Experience</h2>
          <div
            class="resume-iteam"
            v-for="(data, index) in JSON.Experience"
            :key="index"
          >
            <h3 class="text-uppercase">
              {{ data.designation }}
            </h3>
            <div class="box">
              <p>
                <span
                  >{{ data.joiningDate }} -
                  <b :style="[data.endDate === '' ? 'color: #1cbe59' : '']"
                    >{{ data.endDate === "" ? "Present" : data.endDate }}
                  </b>
                </span>
              </p>
            </div>
            <h4>{{ data.companyName }}</h4>
            <h4>
              {{ data.address }}
            </h4>
            <ul>
              <li v-for="(skill, index) in data.skills" :key="index">
                {{ skill }}
              </li>
            </ul>
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
  name: "Resume",
};
</script>

<style></style>
