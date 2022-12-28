<script>
import EmployeesComponent from '@/components/EmployeesComponent/EmployeesComponent.vue';

export default {
  name: "EmployeesView",
  components: {
    EmployeesComponent
  }
};
</script>

<template>
  <section class="users">
    <employees-component/>
  </section>
</template>