<template>
  <div>
    <!-- Navigation Component Imported -->
    <Navigation component="Home"></Navigation>
    <!--X- Navigation Component Imported -X-->
    <div class="container-fuid home">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-xl-6 intro_card">
          <h3>Hello, I'm</h3>
          <h1>{{ JSON.profile.name }}</h1>
          <div class="tag">
            <ul class="d-flex justify-content-center align-items-center">
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
          <div class="social_contact">
            <ul class="d-flex justify-content-center align-items-center">
              <li class="socialLi">
                <a
                  href="https://www.linkedin.com/in/pruthviraj-rajput-131ba61b4"
                  target="__blank"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </li>
              <li class="socialGi">
                <a href="https://github.com/pruthvi7384" target="__blank"
                  ><i class="fab fa-github"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="contact_me">
            <a href="#" target="__blank"
              ><button class="btn">
                My Resume
                <span><i class="fas fa-file-download"></i></span></button
            ></a>
            <router-link to="/contact"
              ><button class="btn">Hire Me</button></router-link
            >
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
  name: "Home",
};
</script>
