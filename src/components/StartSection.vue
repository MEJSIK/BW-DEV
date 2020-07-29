<template>
  <div id="section-one" class="d-flex align-items-center">
    <div class="container">
      <div class="row first-section">
        <div class="col-md-6">
          <h1
            class="text-white"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 0,
              distance: '100px',
              duration: 600,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'left',
            }"
          >
            Cześć, jestem <strong>Bartek</strong>
          </h1>
        </div>
        <div class="col-md-6">
          <p
            class="text-white text-right"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 200,
              distance: '100px',
              duration: 600,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'right',
            }"
          >
            <strong>Specjalizuję się w produkcji</strong><br />
            Aplikacji, stron, gier
          </p>
        </div>
      </div>
      <WhatWeDo />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import WhatWeDo from "@/components/WhatWeDo.vue";
@Component({
  components: { WhatWeDo },
})
export default class StartSection extends Vue {}
</script>
<style lang="scss">
#section-one {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(23, 23, 50, 1) 45%,
      transparent 100%
    ),
    url("https://tenton.al/wp-content/uploads/2019/12/dev.jpeg") no-repeat
      center / cover;

  min-height: 100vh;
  position: relative;

  h1 {
    font-size: 4.5rem;
    transition: all 0.5 ease;
    strong::before {
      content: "_";
      color: blue;
    }
  }
}
.first-section {
  min-height: 100vh;
  align-items: center;
  position: relative;
  &::after {
    content: url("https://static.thenounproject.com/png/486804-200.png");
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes slide-and-fade-left {
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
