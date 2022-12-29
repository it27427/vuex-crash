<script>
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.vue";
import { mapGetters } from "vuex";

export default {
  name: "VuexUserList",
  components: { LoadingSpinner },
  created: function () {
    this.$store.dispatch("usersModule/getUsers");
  },
  computed: mapGetters({
    userState: "getUsersState",
  }),
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

  <div v-if="userState.loading" class="container">
    <loading-spinner />
  </div>

  <div v-if="!userState.loading && userState.errorMessage" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ userState.errorMessage }}</p>
      </div>
    </div>
  </div>

  <div
    v-if="!userState.loading && userState.users.length > 0"
    class="container"
  >
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
            <tr v-for="user in userState.users" :key="user.id">
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
