<script>
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<template>
  <div>
    <header-component></header-component>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>
