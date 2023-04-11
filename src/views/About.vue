<template>
  <div class="about">
    <div class="jumbotron">
      <h1 class="display-4">About Us</h1>
      <p class="lead">We are a team of developers passionate about creating great software.</p>
      <hr class="my-4">
      <p>Our mission is to build innovative applications that solve real-world problems.</p>
    </div>
    <div class="container mt-5">
      <h2>Our Team</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4">
            <img class="card-img-top" src="/assets/images/team-member-1.jpg" alt="Team Member">
            <div class="card-body">
              <h5 class="card-title">Tono</h5>
              <p class="card-text">Web Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img class="card-img-top" src="/assets/images/team-member-2.jpg" alt="Team Member">
            <div class="card-body">
              <h5 class="card-title">Samsul</h5>
              <p class="card-text">Front-end Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img class="card-img-top" src="/assets/images/team-member-3.jpg" alt="Team Member">
            <div class="card-body">
              <h5 class="card-title">Dimas</h5>
              <p class="card-text">Back-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
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
