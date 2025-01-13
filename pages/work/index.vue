<script setup lang="ts">
import { A11y, Mousewheel, Navigation, Pagination } from "swiper/modules";

const categories = [
  { title: "Категория A", value: "A" },
  { title: "Категория B", value: "B" },
  { title: "Категория C", value: "C" },
  { title: "Категория D", value: "D" },
];
const selectedCategory = ref({ title: "Категория A", value: "A" });
function selectCategory(category: { title: string; value: string }) {
  selectedCategory.value = category;
}
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="driving-license-categories">
        <ul class="driving-license-categories-list">
          <li
              v-for="category in categories"
              :key="category.value"
              @click="selectCategory(category)"
              class="driving-license-categories-list__item"
              :class="{ active: selectedCategory.value === category.value }"
          >
            {{ category.title }}
          </li>
        </ul>
      </div>
    </div>
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
      forceToAxis: true,
    }"
    >
      <SwiperSlide class="app-cars-big-slider__item-slide">
        <div class="app-cars-big-slider__item">
          <div class="app-cars-big-slider__item__wrapper">
            <div class="app-cars-big-slider__item-header">
              <div class="app-cars-big-slider__item-title">Водитель Е</div>
              <div class="app-cars-big-slider__item-available">
                <span> Доступно: </span>
                <span class="app-cars-big-slider__item-available-count">
                78
              </span>
              </div>
            </div>
          </div>
          <img
              src="/assets/images/big-slider/optima-slide-preview.png"
              alt="Kia Optima"
              class="app-cars-big-slider__item-bg-img"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="container-fluid">
      <div class="referral-copy">
        <div class="referral-copy-icon">
          <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M27.5 11H13.75C12.2312 11 11 12.2312 11 13.75V27.5C11 29.0188 12.2312 30.25 13.75 30.25H27.5C29.0188 30.25 30.25 29.0188 30.25 27.5V13.75C30.25 12.2312 29.0188 11 27.5 11Z"
                stroke="#1F2023"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.5 22C3.9875 22 2.75 20.7625 2.75 19.25V5.5C2.75 3.9875 3.9875 2.75 5.5 2.75H19.25C20.7625 2.75 22 3.9875 22 5.5"
                stroke="#1F2023"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="referral-copy-body">
          <div>
            <div>Пригласите друзей</div>
            <small>Вы и ваш друг получите бонусы</small>
          </div>
          <div style="font-size: 20px">
            <b>+5000</b>
            <small style="font-size: 14px">₽</small>
          </div>
          <svg
              width="28"
              height="16"
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z"
                fill="#A5A5A5"
            />
          </svg>
        </div>
      </div>
      <div class="vacancy-list">
        <div class="vacancy-list__item" v-for="item in 40" :key="item">
          <div class="vacancy-list__item-header">
            <div class="vacancy-list__item-title">Проект 1</div>
            <button class="btn btn-dark">
              <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M9.24999 3.75H4.66666C4.1604 3.75 3.75 4.1604 3.75 4.66666V9.24999C3.75 9.75625 4.1604 10.1667 4.66666 10.1667H9.24999C9.75625 10.1667 10.1667 9.75625 10.1667 9.24999V4.66666C10.1667 4.1604 9.75625 3.75 9.24999 3.75Z"
                    stroke="#FFD502"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M1.91666 7.41665C1.4125 7.41665 1 7.00415 1 6.49999V1.91666C1 1.4125 1.4125 1 1.91666 1H6.49999C7.00415 1 7.41665 1.4125 7.41665 1.91666"
                    stroke="#FFD502"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <span> Пригласить </span>
            </button>
          </div>
          <div class="vacancy-list__item-body">
            <div class="vacancy-list__item-description">
              <ul>
                <li>ЗП в месяц - 2 раза в месяц.</li>
                <li>График 6/1</li>
              </ul>
            </div>
            <div class="vacancy-list__item-info">
              <div>
                <span> Место загрузки: </span>
                <span>
                <svg
                    width="11"
                    height="14"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5 13.4444C5.5 13.4444 11 9.77778 11 5.5C11 4.04131 10.4205 2.64236 9.38909 1.61091C8.35764 0.579463 6.95869 0 5.5 0C4.04131 0 2.64236 0.579463 1.61091 1.61091C0.579463 2.64236 0 4.04131 0 5.5C0 9.77778 5.5 13.4444 5.5 13.4444ZM7.3335 5.49994C7.3335 6.51246 6.51269 7.33327 5.50017 7.33327C4.48765 7.33327 3.66684 6.51246 3.66684 5.49994C3.66684 4.48741 4.48765 3.6666 5.50017 3.6666C6.51269 3.6666 7.3335 4.48741 7.3335 5.49994Z"
                      fill="#FFD502"
                  />
                </svg>
                <span>Алтуфьево</span>
              </span>
              </div>
              <button class="btn btn-link text-color-grey">
                <u>Показать на карте</u>
              </button>
            </div>
          </div>
          <div class="vacancy-list__item-actions">
            <button class="btn btn-success btn-rounded">Выбрать</button>
            <button class="btn btn-outline btn-rounded">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.driving-license-categories {
  overflow: auto;
  margin-left: 0;
  margin-right: -20px;
  padding-bottom: 3px;
  margin-bottom: 25px;
  &-list {
    display: flex;
    gap: 10px;
    list-style: none;
    margin-bottom: 3px;
    &__item {
      white-space: nowrap;
      padding: 6px 25px;
      border: 1px solid var(--app-grey-color);
      border-radius: 13px;
      &.active {
        border-color: var(--app-default-text-color);
        background-color: var(--app-default-text-color);
        color: white;
      }
    }
  }
}
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
        font-size: clamp(208px, 45vw, 328px);
        color: white;
        font-weight: 700;
        line-height: 0.65;
        z-index: 0;
        text-align: right;
      }

      @media screen and (max-width: 576px) {
        padding: 31px 27px;
        border-radius: 35px;
        min-height: 182px;
        &:before {
          content: none;
        }
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
        font-size: 20px;
        text-transform: none;
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
        border-radius: 36px;
        font-size: clamp(1em, 28px, 2.5em);
        text-align: center;
        justify-content: center;
        align-items: center;
        min-width: 36px;
        color: white;
        background-color: var(--app-default-text-color);
        padding: 0 6px;

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
        display: none;
      }
    }
    &-bg-img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      @media screen and (max-width: 568px) {
        width: 388px;
      }
    }
  }
}
.vacancy-list {
  display: flex;
  flex-flow: column;
  gap: 3px;
  &__item {
    background-color: #fff;
    border-radius: 28px;
    padding: 20px 25px;
    box-shadow: 0 5px 10px rgba(#000, 0.15);
    &-header {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    &-body {
      font-size: 12px;
    }
    &-info {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
    }
    &-actions {
      display: flex;
      gap: 4px;
      .btn {
        flex: 1;
      }
    }
    &-description {
      line-height: 1.4;
      ul {
        list-style: none;
      }
    }
  }
}
.referral-copy {
  height: 69px;
  background: #ffffff;
  box-shadow: 0 4px 35px rgba(#000, 0.06);
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  &-icon {
    width: 63px;
    height: 100%;
    background-color: var(--app-accent-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &-body {
    padding: 13px 17px;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
    line-height: 1;
    small {
      font-size: 10px;
    }
  }
}
</style>
