<template>
  <nav id="top-header" class="navbar navbar-expand-lg navbar-dark fixed-top">
    <a class="navbar-brand" href="#">
      <div class="main-logo">
        <logoSVG class="img-fluid" />
      </div>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Start <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Usługi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Kontakt</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle btn btn-secondary"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            PL
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">PL</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">DE</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import logoSVG from "@/assets/bw-dev-logo.svg";
@Component({
  components: {
    logoSVG,
  },
})
export default class TopHeader extends Vue {}
</script>
<style lang="scss">
#top-header {
  background-color: #000;
  z-index: 100;
}
.main-logo svg {
  width: 150px;
  max-width: 150px;
}
</style>
