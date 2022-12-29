<script>
import EmployeesComponent from "@/components/vuex/EmployeesComponent.vue";

export default {
  name: "EmployeesView",
  components: {
    EmployeesComponent,
  },
};
</script>

<template>
  <section class="employees pt-5 min-vh-100">
    <employees-component />
  </section>
</template>
