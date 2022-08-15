<template>
  <!-- <h1>gfhgjk</h1>
   -->
  <Home />
  <div class="xyz">
    <form class="form-inline my-2 my-lg-0 abc">
      <input
        class="form-control mr-sm-2"
        type="search"
        v-model="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        class="btn btn-outline-success my-2 ml-2 my-sm-0"
        type="submit"
        @click="searchfun"
      >
        Search
      </button>
    </form>
    <!-- <div class="dropdown">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown link
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#"></a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div> -->
    <div>
      <select class="custom-dropdown" name="cars" id="cars" v-model="dropValue">
        <option>name</option>
        <option>location</option>
        <option>id</option>
      </select>
    </div>
  </div>
  <div class="container table-css">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Restaurant Name</th>
          <th scope="col">Restaurant Location</th>
          <th scope="col">Restaurant Location</th>
        </tr>
      </thead>
      <tbody v-for="restaurant in restaurants" :key="restaurant.id">
        <tr>
          <td>{{ restaurant.id }}</td>
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant.location }}</td>
          <button class="btn btn-primary text-dark mr-2">Show</button>
          <button class="btn btn-primary text-dark">EDIT</button>
          <button class="btn btn-primary text-dark" @click="delete()">
            DELETE
          </button>
          <router-link :to="'/' + restaurant.id">Delete</router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Home from "./Home.vue";

export default {
  name: "restaurent-list",
  components: {
    Home,
  },
  data() {
    return {
      restaurants: [
        {
          name: "",
          location: "",
        },
      ],
      search: "",
      dropValue: "",
    };
  },
  methods: {
    async delete()
    {


    }
    async searchfun(e) {
      // e.preventdefault();
      e.preventDefault();

      console.log(this.search, this.dropValue);
      // console.log(`http://localhost:3000/restaurant?location=${this.search}`);
      let result = await axios.get(
        `http://localhost:3000/restaurant?${this.dropValue}=${this.search}`
      );
      console.log(result.data);
      this.restaurants = result.data;
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/restaurant");
    console.log(result.data);
    this.restaurants = result.data;
    // if (result.status == 200) {
    // }
  },
};
</script>
<style>
button {
  /* display: flex;
  justify-content: space-between; */
  margin-right: 3px;
}
.search-field {
  margin-top: 3%;
  margin-right: 3%;

  /* display: flex; */
  /* justify-content: space-around */
}
.table-css {
  margin-top: 5%;
}
.abc {
  width: 20%;
  margin-right: 2%;
  display: flex;
  justify-content: space-between;
}
.xyz {
  /* justify-content: space-between; */
  display: flex;
  margin-left: 16%;
  margin-top: 4%;
}
.custom-dropdown {
  width: 290%;
  height: 101%;
}
</style>
