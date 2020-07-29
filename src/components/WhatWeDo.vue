<template>
  <div id="what-we-do" class="pb-5 v-scroll-reveal">
    <div class="row">
      <div class="col">
        <div
          class="what-we-do-header p-3 text-center"
          v-scroll-reveal.reset="{
            mobile: false,
            delay: 0,
            distance: '100px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'bottom',
          }"
        >
          <h3>Odkryj</h3>
          <p class="m-0">Nasze nowe tecgnologie</p>
        </div>
        <div class="what-we-do-main">
          <div
            class="card"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 300,
              distance: '100px',
              duration: 1000,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'bottom',
            }"
          >
            <p class="card-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              vero voluptatibus eum nesciunt?
            </p>
          </div>
          <div
            class="card"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 600,
              distance: '100px',
              duration: 1000,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'bottom',
            }"
          >
            <p class="card-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              vero voluptatibus eum nesciunt?
            </p>
          </div>
          <div
            class="card"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 900,
              distance: '100px',
              duration: 1000,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'bottom',
            }"
          >
            <p class="card-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              vero voluptatibus eum nesciunt?
            </p>
          </div>
          <div
            class="card"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 1200,
              distance: '100px',
              duration: 1000,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'bottom',
            }"
          >
            <p class="card-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              vero voluptatibus eum nesciunt?
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-md-4 offset-md-2">
        <div
          class="experience"
          v-scroll-reveal.reset="{
            mobile: false,
            delay: 0,
            distance: '1000px',
            duration: 600,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'left',
          }"
        >
          <span>5</span>
          <h5>lat doświadczenia</h5>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div
          class="work-for mt-5 mt-md-0"
          v-scroll-reveal.reset="{
            mobile: false,
            delay: 700,
            distance: '100px',
            duration: 600,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'right',
          }"
        >
          <h6 class="work-for-header text-center text-lg-left">
            Dla kogo pracowałem
          </h6>
          <div
            class="work-for-brands d-flex flex-wrap justify-content-between align-items-center"
          >
            <img
              class="img-fluid"
              src="https://miggroup.com/wp-content/themes/starkers-html5-master/img/logo.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/7090/assets/101811/original-34a50ade30a8e7d4666c40331dab6c70.jpg"
              alt=""
            />
            <braftechLogo class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import braftechLogo from "@/assets/work-for-brands/braftech.svg";
@Component({
  components: {
    braftechLogo,
  },
})
export default class WhatWeDo extends Vue {}
</script>
<style lang="scss">
.work-for {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.work-for-header {
  text-transform: uppercase;
  color: green;
  white-space: nowrap;
}
.work-for-brands {
  height: -webkit-fill-available;
  img {
    max-width: 100px;
  }
}
.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
  }
  span:nth-child(1) {
    font-size: 10rem;
    font-weight: 800;
  }
  h5 {
    text-transform: uppercase;
    color: green;
    white-space: nowrap;
  }
}
.what-we-do-header {
  background-color: #fff;
  margin: 0 auto;
  max-width: 100%;
  transform: translateY(30%);
  z-index: 2;
  box-shadow: 0 0 25px #0000004d;
  position: relative;
  transition: all 0.5s ease;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
}
.what-we-do-main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 220px));
  grid-gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    flex: 1;
    height: 350px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    position: relative;
    border: none;
    border-radius: 0;
    p.card-desc {
      z-index: 1;
      color: #fff;
      text-align: center;
      align-self: flex-end;
      margin: auto 15px 30px 15px;
      font-size: 0.75rem;
      transform: translateY(50%);
      opacity: 0;
      transition: all 1s ease;
      position: relative;
      &::before {
        content: "";
        width: 0%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: -15px;
        left: 0;
        transition: all 2s ease;
        transition-delay: 0.5s;
      }
    }
    &:hover {
      cursor: pointer;
      &::before {
        filter: brightness(50%);
        transform: scale(1.5);
      }
      p.card-desc {
        transform: translateY(0);
        opacity: 1;
        &::before {
          width: 100%;
        }
      }
    }
    &::before {
      backface-visibility: hidden;
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      background: url("https://stelar.pl/sklep/12921-thickbox_default/lozko-pionowe-ze-stolem.jpg")
        no-repeat center / cover;
      width: 100%;
      height: 100%;
      filter: brightness(1);
      transition: all 0.7s ease-in-out;
    }
    &:nth-of-type(1)::before {
      background-image: url("https://pbs.twimg.com/profile_images/938083043385933824/sqSv2hIr_400x400.jpg");
    }
    &:nth-child(2)::before {
      background-image: url("data:image/jpeg;base64,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");
    }
  }
}
</style>
