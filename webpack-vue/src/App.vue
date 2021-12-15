<template>
  <div>
    {{ message }}!!
    <img src="./assets/logo.svg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello Vue",
    };
  },
};
</script>

<style>
@import "./assets/layout.css";

body {
  font-family: Avenir, Helvetica, sans-serif;
  background-image: url(./assets/pattern.png);
}
</style>
