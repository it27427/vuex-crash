<script>
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.vue";

export default {
  name: "UserList",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let dataURL = "https://jsonplaceholder.typicode.com/users";
      let response = await axios.get(dataURL);
      this.users = response.data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>

<template>
  <div class="container mb-5">
    <h3 class="text-success">User List</h3>

    <div class="row">
      <div class="col-lg-7 col-md-8 col-12">
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum
          ullam itaque quae quasi ex deserunt similique in perspiciatis! Iusto
          distinctio quisquam mollitia suscipit! Rerum cupiditate doloribus
          deserunt voluptas iure cumque in, natus ipsa magnam ex veniam aperiam
          temporibus ab recusandae. Placeat quam eaque dicta incidunt quibusdam!
          Recusandae doloremque unde pariatur ipsa repellat suscipit illo non.
        </p>
      </div>
    </div>
  </div>

  <div v-if="loading" class="container">
    <loading-spinner />
  </div>

  <div v-if="!loading && errorMessage" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
    </div>
  </div>

  <div v-if="!loading && users.length > 0" class="container">
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
              <th scope="col">Location</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
