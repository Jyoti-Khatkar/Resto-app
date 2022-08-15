<template>
  <Home />
  <div class="container test">
    <div class="text">Restaurant</div>
    <form>
      <div class="mb-3 set">
        <label for="exampleInputEmail1" class="form-label"
          >Restaurant Name</label
        >
        <input
          type="text"
          v-model="name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-4">
        <label for="exampleInputPassword1" class="form-label">Location</label>
        <input
          type="text"
          v-model="location"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button class="btn btn-primary text-decoration:none" @click="add">
        ADD RESTAURANT
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Home from "./Home.vue";

export default {
  name: "add-restaurent-page",
  components: {
    Home,
  },
  data() {
    return {
      name: "",
      location: "",
    };
  },
  methods: {
    async add(e) {
      e.preventDefault();
      let result = await axios.post("http://localhost:3000/restaurant", {
        name: this.name,
        location: this.location,
      });
      if (result.status == 201) {
        // console.log(this.$route);
        this.$router.push({ name: "restaurent-list" });
      }
    },
  },
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
