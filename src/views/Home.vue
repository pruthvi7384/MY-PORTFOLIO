<template>
  <div>
    <!-- Navigation Component Imported -->
    <Navigation component="Home"></Navigation>
    <!--X- Navigation Component Imported -X-->
    <div class="container-fuid home">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-xl-6 intro_card">
          <h3>Hello, I'm</h3>
          <h1>Pruthviraj Rajput</h1>
          <div class="tag">
            <ul class="d-flex justify-content-center align-items-center">
              <li class="skill">Full Stack Developer</li>
              <li class="skill">Software Developer</li>
              <li class="skill">Freelincer</li>
            </ul>
          </div>
          <p>
            I'm currently working in best software solution company in india,
            Siddhatech Software Services Pvt Ltd. , working as a Software
            Developer.
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
export default {
  components: { Navigation },
  name: "Home",
};
</script>
