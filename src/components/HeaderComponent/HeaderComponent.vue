<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <header class="header sticky-top">
    <div class="container">
      <nav class="d-flex align-items-center justify-content-between">
        <!-- LOGO -->
        <router-link to="/" class="logo">
          <span class="logo-text">Vue</span>
          <span class="logo-icon">
            <img src="@/assets/images/logo/logo.png" alt="site-brand-logo" />
          </span>
        </router-link>
        
        <!-- DESKTOP-MENU -->
        <ul class="desktoplist d-flex align-items-center gap-2">
          <li class="desktoplist-item">
            <router-link to="/" class="desktoplist-link">
              Home
            </router-link>
          </li>
          <li class="desktoplist-item">
            <router-link to="/employees" class="desktoplist-link">
              Employees
            </router-link>
          </li>
          <li class="desktoplist-item">
            <router-link to="/users" class="desktoplist-link">
              Users
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
