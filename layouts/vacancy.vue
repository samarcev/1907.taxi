<script setup lang="ts">

</script>

<template>
  <div id="main-wrapper">
    <header class="vacancy-header">
      <app-logo />
      <nuxt-link to="#" class="btn btn-accent btn-rounded">
        Как заработать?
      </nuxt-link>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
  .vacancy-header {
    display: flex;
    padding: 64px 20px 0;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
    .btn-rounded {
      border-radius: 13px;
      line-height: 1;
      padding: 9px 18px;
      font-weight: 700;
      font-size: 14px;
    }
  }
</style>
