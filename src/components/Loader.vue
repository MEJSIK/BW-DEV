<template>
  <div class="loader"></div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Loader extends Vue {}
</script>
<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 101;
  background-color: #fff;
  &::before {
    content: "";
    width: 40px;
    height: 40px;
    border: 5px solid #000;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    animation: rotate 2s ease backwards infinite;
    position: fixed;
    z-index: 11;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
