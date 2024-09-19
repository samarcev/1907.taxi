<script setup lang="ts">
import type { CarInterface } from "~/api/models/car";
import { type PropType, ref } from "vue";
import AppModal from "~/components/base/AppModal.vue";
import moment from "moment/min/moment-with-locales";
import "moment/locale/ru";

import { A11y, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";

moment.locale("ru");

defineProps({
  data: {
    type: Object as PropType<CarInterface>,
    required: true,
  },
});
const $env = useRuntimeConfig().public;
let openModal = ref<boolean>(false);
function formatNumber(num: number) {
  // Преобразуем число в строку и удаляем все нецифровые символы
  const numStr = num.toString().replace(/\D/g, "");

  // Находим место для пробелов
  const regex = /(\d)(?=(\d{3})+(?!\d))/g;

  // Форматируем число с пробелами
  return numStr.replace(regex, "$1 ");
}

const mainSwiper = ref<SwiperType | null>(null);
const thumbsSwiper = ref<SwiperType | null>(null);
const activeSlideIndex = ref(0);
const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper;
};
const setMainSwiper = (swiper: SwiperType) => {
  mainSwiper.value = swiper;
};

const onSlideChange = (swiper: SwiperType) => {
  activeSlideIndex.value = swiper.activeIndex; // Обновляем индекс активного слайда
};

function closeModal() {
  openModal.value = false;
  mainSwiper.value = null;
  thumbsSwiper.value = null;
}
</script>

<template>
  <div class="app-car-list__item">
    <div class="app-car-list__item-preview">
      <img
        :src="
          $env.API_ASSETS +
          data.photos[0].file.id +
          '?width=129&height=129&quality=70&format=webp'
        "
        alt=""
      />
    </div>
    <div class="app-car-list__item-body">
      <div class="app-car-list__item-car-info">
        <div>
          <span
            ><b>{{ data.name }}</b
            >&nbsp;</span
          >
          <span
            ><b>{{ data.reg_number }}</b
            >,&nbsp;<span>{{ data.year_release }} г.</span></span
          >
        </div>
      </div>
      <div class="app-car-list__item-car-info">
        <div>
          <span>{{ data.coast }} ₽/день</span>
        </div>
        <div>
          <span>Пробег: {{ formatNumber(data.mileage) }} км</span>
        </div>
        <div>
          <span
            >Автопарк:
            <span style="display: inline-flex; align-items: center">
              <span
                ><u>{{ data.park.address }}</u
                >&nbsp; <i class="fa fa-location-dot text-color-accent"></i
              ></span> </span
          ></span>
        </div>
      </div>
      <div class="app-car-list__item-car-info" v-if="data.photos.length > 1">
        <button class="more-photos" @click="openModal = true">
          <i class="fa fa-camera text-color-green"></i>
          <span>Посмотреть фото</span>
        </button>
      </div>
    </div>
    <div class="app-car-list__item-actions">
      <button class="btn btn-success">Забронировать</button>
      <button class="btn btn-outline" @click="openModal = true">
        Подробные условия
      </button>
    </div>
    <app-modal
      :show="openModal"
      @closeModal="closeModal()"
      :id="'modal-' + data.id"
    >
      <div class="more-info-car">
        <div class="more-info-car-wrapper">
          <div class="more-info-car__header">
            <h2>{{ data.reg_number }}</h2>
          </div>
          <div class="more-info-car__body">
            <div class="more-info-car-info">
              <div>
                <h3>{{ data.name }}</h3>
                <div class="car-characteristics">
                  <ul>
                    <li>
                      <span>Год:</span> <b>{{ data.year_release }}</b>
                    </li>
                    <li>
                      <span>Цена:</span> <b>{{ data.coast }} ₽/день </b>
                    </li>
                    <li>
                      <span>Класс:</span> <b> {{ data.class.title }} </b>
                    </li>
                    <li>
                      <span>Выкуп: </span> <b> {{ data.ransom ? 'Да' : 'Нет' }} </b>
                    </li>
                    <li>
                      <span>Пробег: </span>
                      <b>
                        {{ formatNumber(data.mileage) }}
                        км
                      </b>
                    </li>
                    <li>
                      <span>Аренда: </span>
                      <b>
                        {{ data.worktime }}
                      </b>
                    </li>
                    <li>
                      <span>Автопарк: </span>
                      <b>
                        {{ data.park.name }}
                      </b>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="car-address">
                <div>
                  <span>
                    <span>Адрес парка:</span>
                    <br /><b>{{ data.park.address }}</b>
                  </span>
                </div>
                <div>
                  <div id="map" ref="mapRef"></div>
                </div>
              </div>
            </div>
            <div class="more-info-car-photos">
              <div class="more-info-car-photos__header">
                <span>{{ activeSlideIndex + 1 }}/{{ data.photos.length }}</span>
                <span>
                  Загружено
                  {{ moment(data.date_created).format("D MMMM") }}
                </span>
              </div>
              <div class="more-info-car-photos__body">
                <!-- Основной слайдер -->
                <Swiper
                  :modules="[Navigation, A11y, Thumbs]"
                  :slides-per-view="1"
                  :space-between="32"
                  :effect="'slide'"
                  watch-slides-progress
                  :thumbs="{
                    swiper: thumbsSwiper,
                  }"
                  @slideChange="onSlideChange"
                  @swiper="setMainSwiper"
                  class="main-slider"
                >
                  <SwiperSlide v-for="(slide, idx) in data.photos" :key="idx">
                    <img
                      :src="$env.API_ASSETS + slide.file.id"
                      alt=""
                      class="main-slider__item"
                    />
                  </SwiperSlide>
                </Swiper>

                <!-- Слайдер с миниатюрами -->
                <Swiper
                  :modules="[Thumbs]"
                  :space-between="10"
                  :slides-per-view="5"
                  @swiper="setThumbsSwiper"
                  class="thumbs-slider"
                >
                  <SwiperSlide v-for="(slide, idx) in data.photos" :key="idx">
                    <img
                      :src="
                        $env.API_ASSETS +
                        slide.file.id +
                        '?width=103&height=76&quality=50&format=webp'
                      "
                      alt=""
                      class="thumbs-slider__item"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div class="more-info-car__actions">
          <button class="btn">Забронировать</button>
        </div>
      </div>
    </app-modal>
  </div>
</template>

<style scoped lang="scss">
.app-car-list__item {
  display: flex;
  background-color: #fff;
  padding: 30px 45px;
  border-radius: 28px;
  align-items: center;
  gap: 30px;
  width: 100%;
  &-preview {
    img {
      border-radius: 100%;
    }
  }
  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .btn {
      width: 200px;
      border-radius: 40px;
      height: 55px;
      border: none;
    }
  }
  @media screen and (max-width: 576px){
    padding: 15px 25px;
    flex-wrap: wrap;
    &-actions {
      flex-direction: row;
      width: 100%;
      gap: 4px;
      .btn {
        height: 31px;
      }
    }
  }
}
.more-photos {
  display: inline-flex;
  align-items: center;
  background: none;
  gap: 8px;
  padding: 5px;
  border: none;
  span {
    border-bottom: 1px dashed var(--app-grey-color);
  }
}
.more-info-car {
  max-width: 1088px;
  width: 100%;
  padding: 38px 70px 64px;
  @media screen and (max-width: 576px) {
    padding: 32px;
  }
  &__header {
    margin-bottom: 30px;
  }
  &__body {
    display: flex;
    gap: 50px;
    @media screen and (max-width: 576px) {
      flex-direction: column-reverse;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    max-width: 350px;

    h3 {
      margin-bottom: 23px;
    }
    .car-characteristics {
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 5px 45px;
        list-style: none;
        justify-content: space-between;
        @media screen and (max-width: 576px) {
          flex-direction: column;
        }
        li {
          flex: 1;
          white-space: nowrap;
        }
      }
    }
  }
  &-photos {
    max-width: 531px;
    &__header {
      display: flex;
      gap: 30px;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    &__body {
      .main-slider__item {
        border-radius: 25px;
      }
      .thumbs-slider {
        .swiper-slide-thumb-active {
          img {
            border: 2px solid var(--app-accent-color);
          }
        }
        &__item {
          cursor: pointer;
          border-radius: 10px;
        }
      }
    }
  }
  &-wrapper {
    margin-bottom: 56px;
  }
  &__actions {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    .btn {
      background-color: #1f2023;
      color: white;
      max-width: 384px;
      width: 100%;
      height: 44px;
      border-radius: 44px;
      font-weight: 500;
    }
  }
}
</style>
