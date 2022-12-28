<script>
import UserList from '@/components/UserList/UserList.vue';

export default {
  name: "UsersView",
  components: {
    UserList
  }
};
</script>

<template>
  <section class="users">
    <user-list/>
  </section>
</template>
