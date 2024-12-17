<script setup lang="ts">
definePageMeta({
  layout: "hello",
});
useSeoMeta({
  title() {
      return 'Пришлашай друзей и зарабатывай больше'
  },
})
</script>

<template>
  <div class="hello-wrapper">
    <div class="container-fluid">
      <header class="hello-header">
        <app-logo class="header-logo" />
        <nuxt-link to="/rent" class="hello-link">Как заработать?</nuxt-link>
      </header>
      <div class="main-pic-container">
        <img
          src="/assets/images/index-banner/main.png"
          alt=""
          class="main-pic"
        />
      </div>
      <div class="hello-title">
        <h1>Пришлашай друзей и&nbsp;зарабатывай больше</h1>
        <p>Получай 5% от своих друзей + 2.5% от их рефералов</p>
      </div>
      <div class="hello-actions">
        <button class="btn btn-dark">
          Пригласить друзей <br />и заработать
        </button>
        <button class="btn btn-dark" style="max-width: 83px">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 12H15C13.3431 12 12 13.3431 12 15V30C12 31.6569 13.3431 33 15 33H30C31.6569 33 33 31.6569 33 30V15C33 13.3431 31.6569 12 30 12Z"
              stroke="#FFD502"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 24C4.35 24 3 22.65 3 21V6C3 4.35 4.35 3 6 3H21C22.65 3 24 4.35 24 6"
              stroke="#FFD502"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <nuxt-link to="/vacancy" class="btn btn-dark">Устроиться на работу</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hello-header {
  display: flex;
  padding: 64px 0 0;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .hello-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    text-transform: uppercase;
    border-radius: 13px;
    text-decoration: none;
    padding: 6px;
    line-height: 1;
    font-weight: 700;
    height: 32px;
    min-width: 136px;
    font-size: 12px;
  }
}
.main-pic-container {
  position: relative;
  margin-top: 15px;
  margin-bottom: 17px;
  text-align: center;
  .main-pic {
    max-width: 80%;
  }
}

.hello-title {
  text-align: center;
  h1 {
    line-height: 42px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    min-height: 100px;
  }
  p {
    max-width: 259px;
    margin: 0 auto 42px;
  }
}
.hello-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 5px;
  .btn {
    padding: 20px;
    border: none;
    border-radius: 20px;
    height: 80px;
    font-size: 14px;
    font-weight: 500;
    flex: auto;
    text-transform: uppercase;
    line-height: 1.4;
  }
}
</style>
