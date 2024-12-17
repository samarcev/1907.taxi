<script setup lang="ts"></script>

<template>
  <header>
    <app-logo class="header-logo" />
    <app-location class="header-location" />
    <nav class="header-nav">
      <nuxt-link> Акции </nuxt-link>
      <nuxt-link> Вопросы </nuxt-link>
    </nav>
    <app-social class="header-social" />
    <a href="tel:+000000000" class="btn btn-outline header-call-btn">
      Позвонить
    </a>
    <nuxt-link to="#" class="btn btn-accent header-mobile-link">
      Список
    </nuxt-link>
  </header>
</template>

<style scoped lang="scss">
header {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto 20px;
  padding: 64px 11px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 39px;
  gap: 42px;
  @media screen and (max-width: 576px) {
    gap: 20px;
  }
  nav {
    display: flex;
    gap: 73px;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .header-mobile-link {
    display: none;
  }
  @media screen and (max-width: 991px) {
    .header-location {
      order: 1;
    }
    .header-logo {
      order: 2;
    }
    .header-mobile-link {
      display: inline-flex;
      order: 3;
      border: none;
    }
    .header-social {
      display: none;
    }
    .header-call-btn {
      display: none;
    }
    nav {
      display: none;
    }
  }
}
.header-call-btn {
  padding: 9px 24px;
  background: none;
  border-color: inherit;
}
</style>
