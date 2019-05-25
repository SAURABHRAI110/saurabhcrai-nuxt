<template>
  <div>
    <Nav/>

    <nuxt/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
// import Scrollbar from "smooth-scrollbar";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
export default {
  components: {
    Nav,
    Footer
  }
};
</script>


<style>
</style>

