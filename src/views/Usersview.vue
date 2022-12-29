<script>
import UserList from "@/components/vuex/UserList.vue";

export default {
  name: "UsersView",
  components: {
    UserList,
  },
};
</script>

<template>
  <section class="users pt-5 min-vh-100">
    <user-list />
  </section>
</template>
