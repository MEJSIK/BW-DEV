<template>
  <div id="meet-me" class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <span
            class="meet-me-header text-white mb-5"
            v-scroll-reveal.reset="{
              mobile: false,
              delay: 0,
              scale: 0.5,
              distance: '100px',
              duration: 1000,
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              interval: 0,
              opacity: 0,
              origin: 'bottom',
            }"
          >
            <strong>Poznaj</strong> mnie
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form action="" id="contact-form" class="bg-white">
            <img
              class="img-fluid"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Icon_experience_bw.png/900px-Icon_experience_bw.png"
              alt=""
            />
            <h3>Zostaw mi wiadomość</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="txtMsg"
                    class="form-control"
                    placeholder="Your Message *"
                    style="width: 100%; height: 150px;"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btn btn-primary"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class MeetMe extends Vue {}
</script>
<style lang="scss">
#meet-me {
  background: url("https://cdn.pixabay.com/photo/2020/04/25/12/34/first-may-jerash-5090599_1280.jpg")
    no-repeat center/cover;
}

.meet-me-header {
  font-size: 5rem;
  display: block;
  margin-top: 10rem;
}
#contact-form {
  transform: translateY(15%);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  padding-top: 5rem;
  @media screen and (min-width: 992px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  position: relative;
  & > img {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    max-width: 100px;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 5px solid #000;
  }
}
</style>
