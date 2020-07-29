<template>
  <footer id="footer" class="pb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-md-0 mb-3">
          <!-- Links -->
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
          <!-- Links -->
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 mb-md-0 mb-3">
          <logoSVG class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://bw-dev.pl">bw-dev.pl</a>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import logoSVG from "@/assets/bw-dev-logo.svg";

@Component({
  components: { logoSVG },
})
export default class Footer extends Vue {}
</script>
<style lang="scss">
#footer {
  background-color: #000;
  padding-top: 7rem;
}
</style>
