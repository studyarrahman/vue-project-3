<template>
    <div class="gallery">
      <div class="jumbotron">
        <h1 class="display-4">Gallery</h1>
        <p class="lead">Check out some of our latest work.</p>
        <hr class="my-4">
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <img class="card-img-top" src="/assets/images/gallery-1.jpg" alt="Gallery Image">
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">this</p>
                <a href="#" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img class="card-img-top" src="/assets/images/gallery-2.jpg" alt="Gallery Image">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">this</p>
                <a href="#" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img class="card-img-top" src="/assets/images/gallery-3.jpg" alt="Gallery Image">
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">this</p>
                <a href="#" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Gallery"
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
  