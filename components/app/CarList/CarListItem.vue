<script setup lang="ts">
import type { CarInterface } from "~/api/models/car";
import { type PropType, ref } from "vue";
import AppModal from "~/components/base/AppModal.vue";
import moment from "moment/min/moment-with-locales";
import "moment/locale/ru";
import { vMaska } from "maska/vue";
import { A11y, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import { createOrder } from "~/api/requests/createOrder";

moment.locale("ru");

const props = defineProps({
  data: {
    type: Object as PropType<CarInterface>,
    required: true,
  },
});
const $env = useRuntimeConfig().public;
let openModal = ref<boolean>(false);
let openFormModal = ref<boolean>(false);

let orderForm = ref({
  name: "",
  phone: "",
  communication_option: "Телефон",
  messenger: null,
});
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
const successRequest = ref(false);
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
function closeBookModal() {
  openFormModal.value = false;
  successRequest.value = false;
}

async function sendOrderForm() {
  const { mutate } = createOrder({
    name: orderForm.value.name,
    phone: orderForm.value.phone,
    carId: +props.data?.id,
    messenger: orderForm.value.messenger || "",
    ref_code: localStorage.getItem("referral_code"),
  });

  const res = await mutate();
}
</script>

<template>
  <div class="app-car-list__item">
    <div class="app-car-list__item-preview">
      <img
        :src="
          $env.API_ASSETS +
          data.thumbnail.id +
          '?width=129&height=129&quality=70&format=webp'
        "
        alt=""
      />
    </div>
    <div class="app-car-list__item-body">
      <div class="app-car-list__item-car-info">
        <div>
          <span
            ><b>{{ data.model.name }}</b
            >&nbsp;</span
          >
          <span
            ><b>{{ data.registration_number }}</b
            >,&nbsp;<span>{{ data.year_of_release }} г.</span></span
          >
        </div>
      </div>
      <div class="app-car-list__item-car-info">
        <div>
          <span>{{ data.cost }} ₽/день</span>
        </div>
        <div>
          <span>Пробег: {{ formatNumber(data.mileage) }} км</span>
        </div>
        <div>
          <span
            >Автопарк:
            <span style="display: inline-flex; align-items: center">
              <span
                ><u>{{ data.car_park.title }}</u
                >&nbsp; <i class="fa fa-location-dot text-color-accent"></i
              ></span> </span
          ></span>
        </div>
      </div>
      <div class="app-car-list__item-car-info" v-if="data.gallery.length > 1">
        <button class="more-photos" @click="openModal = true">
          <i class="fa fa-camera text-color-green"></i>
          <span>Посмотреть фото</span>
        </button>
      </div>
    </div>
    <div class="app-car-list__item-actions">
      <button class="btn btn-success" @click="openFormModal = true">
        Забронировать
      </button>
      <button class="btn btn-outline" @click="openModal = true">
        Подробные условия
      </button>
    </div>
  </div>
  <app-modal
    :show="openModal"
    @closeModal="closeModal()"
    :id="'modal-' + data.id"
  >
    <div class="more-info-car">
      <div class="more-info-car-wrapper">
        <div class="more-info-car__header">
          <h2>{{ data.registration_number }}</h2>
        </div>
        <div class="more-info-car__body">
          <div class="more-info-car-info">
            <div>
              <h3>{{ data.model.name }}</h3>
              <div class="car-characteristics">
                <ul>
                  <li>
                    <span>Год:</span> <b>{{ data.year_of_release }}</b>
                  </li>
                  <li>
                    <span>Цена:</span> <b>{{ data.cost }} ₽/день </b>
                  </li>
                  <li>
                    <span>Класс:</span> <b> {{ data.class.title }} </b>
                  </li>
                  <li>
                    <span>Выкуп: </span>
                    <b> {{ data.buyback ? "Да" : "Нет" }} </b>
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
                      {{ data.rent }}
                    </b>
                  </li>
                  <li>
                    <span>Автопарк: </span>
                    <b>
                      {{ data.car_park.title }}
                    </b>
                  </li>
                </ul>
              </div>
            </div>
            <div class="car-address">
              <div>
                <span>
                  <span>Адрес парка:</span>
                  <br /><b>{{ data.car_park.address }}</b>
                </span>
              </div>
              <div>
                <div id="map" ref="mapRef"></div>
              </div>
            </div>
          </div>
          <div class="more-info-car-photos">
            <div class="more-info-car-photos__header">
              <span>{{ activeSlideIndex + 1 }}/{{ data.gallery.length }}</span>
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
                <SwiperSlide v-for="(slide, idx) in data.gallery" :key="idx">
                  <img
                    :src="
                      $env.API_ASSETS +
                      slide.file.id +
                      '?width=521&height=307&quality=100&format=webp'
                    "
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
                <SwiperSlide v-for="(slide, idx) in data.gallery" :key="idx">
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
        <button class="btn" @click="openFormModal = true">Забронировать</button>
      </div>
    </div>
  </app-modal>
  <app-modal
    :show="openFormModal"
    :id="'modal-form-' + data.id"
    @closeModal="closeBookModal"
  >
    <div class="to-book-model">
      <form @submit.prevent="sendOrderForm()" v-if="!successRequest">
        <h2>Запрос на бронирование автомобиля</h2>
        <div class="form-control">
          <label for="">Ваше имя</label>
          <input
            type="text"
            autocomplete="off"
            required
            placeholder=""
            v-model="orderForm.name"
          />
        </div>
        <div class="form-control">
          <label for="">Ваш телефон</label>
          <input
            type="tel"
            autocomplete="off"
            required
            placeholder=""
            minlength="16"
            v-model="orderForm.phone"
            v-maska="'+7 ### ### ##-##'"
          />
        </div>
        <div class="radio-group">
          <div class="radio-group-label">
            <span>Удобный способ связи</span>
          </div>
          <label class="radio-control">
            <span class="radio-control-input">
              <input
                type="radio"
                name="communication_option"
                id=""
                value="Телефон"
                checked
                v-model="orderForm.communication_option"
              />
            </span>
            <span class="radio-control-label"> Телефон </span>
          </label>
          <label class="radio-control">
            <span class="radio-control-input">
              <input
                type="radio"
                name="communication_option"
                id=""
                value="Мессенджер"
                v-model="orderForm.communication_option"
              />
            </span>
            <span class="radio-control-label">Мессенджер</span>
          </label>
        </div>
        <div
          class="form-control"
          v-if="orderForm.communication_option === 'Мессенджер'"
        >
          <input
            type="text"
            name="messenger"
            required
            v-model="orderForm.messenger"
          />
        </div>
        <div>
          <button
            class="btn btn btn-rounded btn-large btn-dark w-full"
            type="submit"
          >
            Отправить заявку
          </button>
        </div>
        <div>
          <small> Наш специалтист свяжется с вами в ближайшее время </small>
        </div>
      </form>
      <div v-else>
        <h3>Наш специалтист свяжется с вами в ближайшее время</h3>
      </div>
    </div>
  </app-modal>
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
  @media screen and (max-width: 576px) {
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
.to-book-model {
  max-width: 615px;
  width: 100%;
  padding: 86px 65px 106px;
  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 23px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 576px) {
    padding: 15px 25px;
    h2 {
      font-size: 28px;
      margin-bottom: 0;
    }
  }
}
</style>
