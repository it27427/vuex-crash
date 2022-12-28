<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <header class="header">
    <!-- LOGO -->
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo/logo.png" alt="site-brand-logo" />
    </router-link>

    <h3>This is header</h3>
  </header>
  <router-view></router-view>
</template>
