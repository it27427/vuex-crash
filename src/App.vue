<script>
/** 
** HEADER COMPONENT
** MAIN COMPONENT
** FOOTER COMPONENT
**/
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<template>
  <header-component></header-component>
  <footer-component></footer-component>
</template>
