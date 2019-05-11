<template>
  <div id="my-scrollbar">
    <Nav/>

    <nuxt/>
  </div>
</template>

<script>
// import Scrollbar from "smooth-scrollbar";
import Nav from "~/components/nav";

export default {
  components: {
    Nav
  },
  mounted() {
    // Scrollbar.init(document.getElementById("my-scrollbar"));
  }
};
</script>


<style>
#my-scrollbar {
  position: relative;
}
</style>

