<script>
import VuexCounter from "@/components/vuex/VuexCounter.vue";

export default {
  name: "HomeView",
  components: {
    VuexCounter,
  },
};
</script>

<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <figure class="vuex-thumb mx-auto text-center py-5">
            <img src="@/assets/images/vuex.png" alt="vuex-thumbnail" />
          </figure>
        </div>
      </div>
    </div>

    <vuex-counter />
  </section>
</template>
