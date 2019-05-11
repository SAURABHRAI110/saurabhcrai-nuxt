<template>
  <section class="container">
    <h1>The Best Nuxt</h1>
    <p class="subheading">We've gor the best nuxt's.</p>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatibus consequuntur animi dolore assumenda sequi earum adipisci nobis explicabo numquam obcaecati aut culpa! Nam sunt, possimus maxime harum at quidem?</p>
    <div class="img-container">
      <div class="images">
        <img src="~/assets/img/home-people.jpg">
      </div>
      <div class="images">
        <img src="~/assets/img/home-people-1.jpg">
      </div>
      <div class="images">
        <img src="https://source.unsplash.com/random">
      </div>
      <div class="images">
        <img src="~/assets/img/home-people-3.jpg">
      </div>
      <div class="images">
        <img src="~/assets/img/home-people-4.jpg">
      </div>
      <div class="images" v-rellax="{speed: -2}">
        <img src="~/assets/img/home-people-5.jpg">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Nuxt Home",
      meta: [
        { name: "description", content: "This is my Nuxt Home." },
        { name: "keywords", content: "about nuxt, nuxt info" }
      ]
    };
  }
};
</script>

<style>
.img-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}

.images > img {
  object-fit: fill;
  width: 100%;
}
</style>
