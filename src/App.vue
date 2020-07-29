<template>
  <div id="app">
    <transition name="fade">
      <Loader v-if="pageLoading" />
    </transition>
    <TopHeader />
    <StartSection />
    <MyProjects />
    <MeetMe />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopHeader from "./components/TopHeader.vue";
import Loader from "./components/Loader.vue";
import StartSection from "./components/StartSection.vue";
import MyProjects from "@/components/MyProjects.vue";
import MeetMe from "@/components/MeetMe.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    TopHeader,
    StartSection,
    Loader,
    MyProjects,
    MeetMe,
    Footer,
  },
})
export default class App extends Vue {
  pageLoading = true;
  mounted() {
    window.addEventListener("load", () => {
      this.$data.pageLoading = false;
    });
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: "Montserrat", sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.container {
  transition: all 0.2s ease;
}
</style>
