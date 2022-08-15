<template>
  <div class="container test">
    <div class="text">Sign Up Form</div>
    <form>
      <div class="mb-3 set">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Confirm Password</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "signup-page",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  margin-top: 7%;
  width: 30%;
  padding: 8%;
  background-image: url("https://24j1q8gzma4rsuat1tbzospi-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/NewsletterSignup-Background.jpg");
}
label {
  color: white;
}
.text {
  margin-bottom: 15%;
  font-size: 38px;
  display: flex;
  justify-content: center;
  color: white;
}
</style>
