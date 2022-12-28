<script>
import CounterComponent from '@/components/CounterComponent/CounterComponent.vue';

export default {
  name: "HomeView",
  components: {
    CounterComponent
  }
};
</script>

<template>
  <section class="home">
    <counter-component />
  </section>
</template>