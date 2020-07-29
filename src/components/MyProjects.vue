<template>
  <div id="my-projects" class="py-5">
    <div class="container">
      <div class="row pb-3">
        <div class="col">
          <h3><strong>Moje</strong> projekty</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div class="my-project">
                <img
                  class="img-fluid"
                  src="http://kordrew.com/assets/img//logo.png"
                  alt=""
                />
                <div class="desc">
                  <h5>Kordrew.com</h5>
                  <p>Strona dla firmy zajmującej sięusługami stolarskimi</p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="my-project">
                <img
                  class="img-fluid"
                  src="https://gallery.dpcdn.pl/imgc/Tools/96909/g_-_-x-_-_s_x17365c5b-87f5-4d6b-9c8e-4282de8ecaab.PNG"
                  alt=""
                />
                <div class="desc">
                  <h5>Kordrew.com</h5>
                  <p>Strona dla firmy zajmującej sięusługami stolarskimi</p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="my-project">
                <img
                  class="img-fluid"
                  src="https://fakeimg.pl/250x250"
                  alt=""
                />
                <div class="desc">
                  <h5>Kordrew.com</h5>
                  <p>Strona dla firmy zajmującej sięusługami stolarskimi</p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="my-project">
                <img
                  class="img-fluid"
                  src="https://fakeimg.pl/250x250"
                  alt=""
                />
                <div class="desc">
                  <h5>Kordrew.com</h5>
                  <p>Strona dla firmy zajmującej sięusługami stolarskimi</p>
                </div>
              </div></swiper-slide
            >

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MyProjects extends Vue {
  swiperOptions = {
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };
}
</script>
<style lang="scss">
h4 {
  font-weight: 500;
}

.my-project {
  max-width: 100%;
  transition: all 0.4s ease;
  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    height: 150px;
    width: auto;
    object-fit: contain;
  }
}
</style>
