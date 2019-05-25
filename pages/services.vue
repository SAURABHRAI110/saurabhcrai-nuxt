<template>
  <section class="container">
    <h1>Services</h1>
    <p class="subheading">They are aajuicy and stuff</p>
    <div class="reveal-holder" data-aos="fade-up" data-aos-duration="1000">
      <div class="reveal-block red right" data-aos="reveal-right"></div>
      <h2 class="info-block-heading black51">Preface</h2>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Services",
      meta: [
        { name: "description", content: "This is my about description here." },
        { name: "keywords", content: "about nuxt, nuxt info" }
      ]
    };
  }
};
</script>

<style>
:root {
  --primary-color: #fc3a52;
  --secondary-color: #1c1b20;
}

/* Reveal block */
.reveal-holder {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.reveal-holder .reveal-block {
  position: absolute;
  top: 15%;
  width: 100%;
  height: 70%;
  background: white;
}

.reveal-holder .reveal-block::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: lightgray;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-duration: 0.5s;
}

.reveal-block.gradient::before {
  background: linear-gradient(to left, #eebf56, #f46ca3);
}

.reveal-block.red::before {
  background: var(--primary-color);
}

.reveal-block.gradient-two::before {
  background: linear-gradient(to left, #1b9edf, #af74c3);
}

.reveal-block.extra {
  background: #1b9edf;
}

.reveal-block.extra::before {
  background: #af74c3;
}

.reveal-block.top.aos-animate::before,
.reveal-block.bottom.aos-animate::before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

.reveal-block.left.aos-animate::before,
.reveal-block.right.aos-animate::before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.reveal-block.top::before {
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

.reveal-block.left::before {
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
}

.reveal-block.right::before {
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

.reveal-block.bottom::before {
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
}

/* AOS animate */
[data-aos="reveal-top"],
[data-aos="reveal-left"],
[data-aos="reveal-right"],
[data-aos="reveal-bottom"] {
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-delay: 0.5s;
}

[data-aos="reveal-top"] {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

[data-aos="reveal-top"].aos-animate {
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
}

[data-aos="reveal-left"] {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

[data-aos="reveal-left"].aos-animate {
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

[data-aos="reveal-right"] {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

[data-aos="reveal-right"].aos-animate {
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
}

[data-aos="reveal-bottom"] {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

[data-aos="reveal-bottom"].aos-animate {
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

[data-aos="reveal-item"] {
  visibility: hidden;
  transition-property: visibility;
  transition-duration: 0s;
}

[data-aos="reveal-item"].aos-animate {
  visibility: visible;
}

.footer-wrapper {
  height: 90vh;
  width: 100%;
  position: relative;
}
</style>
