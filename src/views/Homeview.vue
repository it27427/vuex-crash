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
    <div class="container">
      <div class="row">
        <div class="col">
          <figure class="vuex-thumb mx-auto text-center py-5">
            <img src="@/assets/images/vuex.png" alt="vuex-thumbnail">
          </figure>
        </div>
      </div>
    </div>

    <counter-component />
  </section>
</template>