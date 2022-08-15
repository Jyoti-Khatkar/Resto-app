<template>
  <nav class="navbar navbar-expand-lg navbar-light background-color">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">RESTAURANT</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-light fs-4" to="/add"
              >Add Restaurant</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light fs-4" to="/list"
              >Restaurants List</router-link
            >
          </li>
        </ul>
        <span class="me-2">
          <!-- <li class="nav-item"> -->
          <a class="nav-link text-light fs-4" href="#">Logout</a>
          <!-- </li> -->
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "home-page",
};
</script>
<style>
.background-color {
  background-color: #2a99ac;
}
</style>
