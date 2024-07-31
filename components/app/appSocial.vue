<template>
  <div class="app-social-links">
    <a href="#" target="_blank" class="app-social-links__item">
      <img src="~/assets/images/social-icons/tg.svg" alt="Telegram" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.app-social-links {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  &__item {
    width: 36px;
    height: 36px;
    img {
      pointer-events: none;
    }
  }
}
</style>
