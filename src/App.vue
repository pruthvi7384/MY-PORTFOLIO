<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <!-- Nav Bar -->
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><span>Pruthviraj Rajput</span></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/resume"
                >Resume</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/projects"
                >Projects</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/contact-us"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- X-Nav Bar -->

    <router-view />
  </div>
</template>
