<script>
import { RouterLink } from "vue-router";

import Navigation from "../jsonData/navigation.js";
import JSON from "../jsonData/profile.json";

export default {
  name: "Navigation",
  data() {
    return {
      navigator: [],
    };
  },
  props: {
    component: String,
  },
  created() {
    this.navigator = Navigation;
  },
};
</script>

<template>
  <!-- Navigation Bar -->
  <nav
    :class="[
      'navbar navbar-expand-lg',
      component === 'Home' ? 'fixed-top' : 'sticky-top background-nav',
    ]"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">{{
        JSON.profile.name
      }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span><i class="fas fa-bars"></i></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto align-items-center mb-2 mb-lg-0">
          <li class="nav-item" v-for="data in navigator" :key="data.id">
            <router-link
              exactActiveClass="active"
              :to="data.path"
              class="nav-link"
              >{{ data.name }}</router-link
            >
          </li>
          <li class="socialLi nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/pruthviraj-rajput-131ba61b4"
              target="__blank"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li class="socialGi nav-item">
            <a
              class="nav-link"
              href="https://github.com/pruthvi7384"
              target="__blank"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li class="nav-item">
            <a href="https://drive.google.com/file/d/1CBXL31UuY-1bkW1iRbwk5E2j8n5KKJT6/view?usp=drivesdk" class="nav-link" target="__blank"
              ><button class="btn">
                My Resume
                <span><i class="fas fa-file-download"></i></span></button
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- X-Navigation Bar-X -->
</template>
