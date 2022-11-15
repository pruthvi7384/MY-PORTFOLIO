<script>
import { RouterView, RouterLink } from "vue-router";

import Navigation from "./jsonData/navigation.js";

export default {
  name: "App",
  data() {
    return {
      navigator: [],
    };
  },
  created() {
    this.navigator = Navigation;
  },
};
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Pruthviraj Rajput</router-link>
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
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
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
          </ul>
        </div>
      </div>
    </nav>
    <!-- X-Navigation Bar-X -->

    <!-- Router View Of All Pages -->
    <div>
      <router-view></router-view>
    </div>
    <!-- X-Router View of All Pages-X -->
  </div>
</template>
