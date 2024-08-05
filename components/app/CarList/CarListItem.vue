<script setup lang="ts">
import type { CarInterface } from "~/api/models/car";
import { type PropType, ref } from "vue";
import AppModal from "~/components/base/AppModal.vue";

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
            >Автопарк: <u>{{ data.park.address }}</u
            >&nbsp; <i class="fa fa-location-dot text-color-accent"></i
          ></span>
        </div>
      </div>
      <div class="app-car-list__item-car-info" v-if="data.photos.length > 1">
        <button class="more-photos">
          <i class="fa fa-camera text-color-green"></i>
          <span>Посмотреть фото</span>
        </button>
      </div>
    </div>
    <div class="app-car-list__item-actions">
      <button class="btn btn-success" @click="openModal = true">
        Забронировать
      </button>
      <button class="btn btn-outline">Подробные условия</button>
    </div>
    <app-modal
        :show="openModal"
        @closeModal="openModal = false"
        :id="'modal-' + data.id"
    >
      <pre>{{ data }}</pre>
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
</style>
