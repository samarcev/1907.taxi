<script setup lang="ts">
import type { CarInterface } from "~/api/models/car";
import type { PropType } from "vue";
import { Swiper } from "swiper/vue";
import { Navigation, A11y, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css/pagination";
defineProps({
  items: {
    type: Array as PropType<CarInterface[]>,
  },
  models: {
    type: Array as PropType<{ count: number }[]>,
  },
});
</script>

<template>
  <div class="app-cars-big-slider">
    <Swiper
      :modules="[Navigation, A11y, Mousewheel, Pagination]"
      :navigation="{
        nextEl: '.app-cars-big-slider__navigation .slider-navigation__next',
        prevEl: '.app-cars-big-slider__navigation .slider-navigation__prev',
      }"
      :slides-per-view="'auto'"
      :effect="'slide'"
      :space-between="32"
      :centered-slides="true"
      :pagination="{
        dynamicBullets: true,
      }"
      :mousewheel="{
        eventsTarget: 'container',
      }"
    >
      <SwiperSlide
        v-for="slide in items"
        :key="slide.id"
        class="app-cars-big-slider__item-slide"
      >
        <div class="app-cars-big-slider__item">
          <div
            class="app-cars-big-slider__item__wrapper"
            :data-available-count="77"
          >
            <div class="app-cars-big-slider__item-header">
              <div class="app-cars-big-slider__item-title">
                {{ slide.name }}
              </div>
              <div class="app-cars-big-slider__item-available">
                <span> Доступно: </span>
                <span class="app-cars-big-slider__item-available-count">
                  77
                </span>
              </div>
            </div>
            <div class="app-cars-big-slider__item-info">
              <div class="num coast">
                <span>
                  {{ slide.coast }}
                </span>
                <sub>₽/день</sub>
              </div>
              <div class="num worktime">
                <span>
                  {{ slide.worktime }}
                </span>
              </div>
              <div class="num release-year">
                <span>
                  {{ slide.year_release }}
                </span>
              </div>
            </div>
          </div>
          <img
            src="~/assets/images/big-slider/optima-slide-preview.png"
            alt="Kia Optima"
            class="app-cars-big-slider__item-bg-img"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-navigation app-cars-big-slider__navigation">
      <button class="slider-navigation__prev" aria-label="Prev slide">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="slider-navigation__next" aria-label="Next slide">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-cars-big-slider {
  --swiper-theme-color: var(--app-accent-color);
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-border-radius: 8px;
  position: relative;
  &::v-deep(.swiper-pagination) {
    @media screen and (min-width: 576px) {
      display: none;
    }
    .swiper-horizontal {
      & > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
      .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        .swiper-pagination-bullet {
          transition: 200ms width ease-in-out;
        }
      }
    }
    .swiper-pagination-bullet-active {
      width: 44px;
    }
    .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev,
    .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
      transform: none !important;
    }
  }
  &__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    max-width: 1300px;
    margin: 0 auto;
    button {
      position: absolute;
      bottom: calc(80px + 164px);
      width: 56px;
      height: 56px;
      border-radius: 100%;
      background: none;
      border: 1px solid;
      font-size: 25px;
      font-weight: 300;
      cursor: pointer;
      z-index: 100;
      .fa {
        pointer-events: none;
      }
      &.slider-navigation__prev {
        left: 64px;
      }
      &.slider-navigation__next {
        right: 64px;
      }
    }
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
  &__item {
    padding-bottom: 162px;
    position: relative;
    user-select: none;
    @media screen and (max-width: 576px) {
      padding-right: 15px;
      padding-left: 15px;
    }
    &-slide {
      max-width: 1300px;
      width: 100% !important;
    }
    &__wrapper {
      min-height: 460px;
      padding: 40px 64px;
      background-color: var(--app-accent-color);
      border-radius: 57px;
      position: relative;
      &:before {
        content: attr(data-available-count);
        position: absolute;
        right: 10%;
        bottom: 0;
        font-size: 22.5rem;
        color: white;
        font-weight: 700;
        line-height: 0.65;
        z-index: 0;
        text-align: right;
      }

      @media screen and (max-width: 576px) {
        padding: 31px 27px;
        border-radius: 35px;
      }
    }
    &-header {
      display: flex;
      gap: 50px;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 27px;
      border-bottom: 1px solid white;
      @media screen and (max-width: 576px) {
        gap: 20px;
      }
    }
    &-title {
      font-weight: 500;
      font-size: 36px;
      text-transform: uppercase;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media screen and (max-width: 576px) {
        font-size: 28px;
      }
    }
    &-available {
      display: flex;
      flex: 0 0 auto;
      font-size: clamp(1em, 16px, 2.5em);
      text-transform: uppercase;
      font-weight: 400;
      align-items: center;
      gap: 19px;

      @media screen and (max-width: 576px) {
        gap: 6px;
        font-size: 14px;
      }
      &-count {
        display: inline-flex;
        border-radius: 100%;
        font-size: clamp(1em, 28px, 2.5em);
        text-align: center;
        justify-content: center;
        align-items: center;
        min-width: 36px;
        color: white;
        background-color: var(--app-default-text-color);
        padding: 4px 6px;

        @media screen and (max-width: 576px) {
          font-size: 12px;
          width: 25px;
          height: 25px;
          min-width: auto;
        }
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      padding-top: 30px;
      position: relative;
      z-index: 1;
      .num {
        flex: 1;
        font-weight: 700;
        font-size: clamp(2rem, 6em, 8rem);
        text-align: center;
        white-space: nowrap;
        padding: 0 15px;
        sub {
          vertical-align: baseline;
          font-size: 2rem;
        }
        &:not(:first-child) {
          border-left: 1px solid white;
        }
        @media screen and (max-width: 576px) {
          font-size: 48px;
          text-align: left;
          sub {
            font-weight: 400;
          }

          &:not(:first-child) {
            border-left: none;
          }
        }
      }

      @media screen and (max-width: 576px) {
        flex-direction: column;
        gap: 0;
      }
    }
    &-bg-img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
}
</style>
