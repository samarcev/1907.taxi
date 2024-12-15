<script setup lang="ts">
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/vue";
const showCloseBtn = ref(false);

const emit = defineEmits(["close"]);
onMounted(() => {
  document.body.style.overflow = "hidden";
});
function close() {
  document.body.style.overflow = "";
  sessionStorage.setItem('showStoriesBlock', 'true')
  emit("close");
}
</script>

<template>
  <div class="stories-wrapper">
    <button
      @click.prevent="close()"
      v-if="showCloseBtn"
      class="btn btn-outline close"
    >
      <i class="fa fa-close"></i>
    </button>
    <Swiper
      :modules="[Pagination]"
      :pagination="{
        dynamicBullets: false,
      }"
      @reachEnd="showCloseBtn = true"
      class="stories-slider"
    >
      <SwiperSlide>
        <div class="story">
          <div class="story-image">
            <img src="/images/stories/5.png" alt="">
          </div>
          <div class="story-title">
            Возможности заработка, привлекая водителей
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="story">
          <div class="story-image">
            <img src="/images/stories/6.png" alt="">
          </div>
          <div class="story-title">
            Схеме заработка, когда приглашенные пользователи сами привлекают водителей
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="story">
          <div class="story-image">
            <img src="/images/stories/4.png" alt="">
          </div>
          <div class="story-title">
            Простая схема вывода денег
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.stories-wrapper {
  --swiper-theme-color: var(--app-accent-color);
  --swiper-pagination-bullet-width: 100%;
  --swiper-pagination-bullet-border-radius: 8px;
  --swiper-pagination-top: 0;
  --swiper-pagination-bottom: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #FFFFFF, #E7E7E7);
  z-index: 100100;
  overflow: hidden;
  height: 100vh;
  padding: 57px 20px 10px;
  .stories-slider {
    height: 100%;
    display: flex;
    flex-flow: column-reverse;
    gap: 10px;
  }
}
.close {
  position: absolute;
  top: 10px;
  right: 25px;
}
::v-deep(.stories-slider) {
  .swiper-pagination {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    justify-content: center;
    &-bullet {
      flex: 1;
      max-width: 125px;
      height: 7px;
    }
  }
}

.story {
  display: flex;
  flex-flow: column;
  gap: 30px;
  justify-content: space-around;
  height: 100%;
  &-title {
    font-size: clamp(24px, 2vw, 28px);
    text-align: center;
    font-weight: 700;
  }
  &-image {
    text-align: center;
  }
}
</style>
