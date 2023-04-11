<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to My App!</h1>
      <p class="lead">This is a multi-page VueJS application using Vue Router and Bootstrap.</p>
      <hr class="my-4">
      <p>Click on the links in the navbar to navigate to other pages.</p>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h2>Section 1</h2>
          <p>this</p>
        </div>
        <div class="col-md-6">
          <h2>Section 2</h2>
          <p>this</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.jumbotron {
  background-color: #e9ecef;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
}
</style>
