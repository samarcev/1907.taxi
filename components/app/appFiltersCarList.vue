<script setup lang="ts">
import AppSelect from "~/components/base/AppSelect.vue";
import AppSelectOption from "~/components/base/AppSelectOption.vue";

defineProps({
  currentCount: {
    type: Number,
    required: true,
  },
});

defineEmits(["filtersChange"]);

const selectedOption = ref<{ id: number; value: string }>();
const options = ref([
  { id: 1, value: "Москва" },
  { id: 2, value: "Санкт-Петербург" },
  { id: 3, value: "Астрахань" },
  { id: 4, value: "Владивосток" },
  { id: 5, value: "Волгоград" },
  { id: 6, value: "Воронеж" },
  { id: 7, value: "Екатеринбург" },
  { id: 8, value: "Иркутск" },
  { id: 9, value: "Казань" },
  { id: 10, value: "Калуга" },
  { id: 11, value: "Кемерово" },
  { id: 12, value: "Краснодар" },
  { id: 13, value: "Красноярск" },
  { id: 14, value: "Магнитогорск" },
  { id: 15, value: "Нижний Новгород" },
  { id: 16, value: "Новосибирск" },
  { id: 17, value: "Обнинск" },
  { id: 18, value: "Оренбург" },
  { id: 19, value: "Ростов-на-Дону" },
  { id: 20, value: "Самара" },
  { id: 21, value: "Саранск" },
  { id: 22, value: "Сочи" },
  { id: 23, value: "Челябинск" },
]);

const selectOption = (option: { id: number; value: string }) => {
  selectedOption.value = option;
};
</script>

<template>
  <div class="filters-cars">
    <div class="filters-cars_header">
      <i class="fa fa-filter"></i>
      <span>Фильтр</span>
    </div>
    <div class="filters-cars_body">
      <form>
        <div class="form-control">
          <AppSelect
            v-model="selectedOption"
            :options="options"
            placeholder="Город"
          >
            <template v-slot:value-trigger v-if="selectedOption?.value">
              {{ selectedOption?.value }}
            </template>
            <template v-slot:option="{ value }">
              <AppSelectOption :value="value" @select="selectOption(value)">
                {{ value.value }}
              </AppSelectOption>
            </template>
          </AppSelect>
        </div>
        <div class="form-control">
          <AppSelect model-value="" :options="[]" placeholder="Район">
          </AppSelect>
        </div>
        <div class="form-control">
          <AppSelect model-value="" :options="[]" placeholder="Автопарк">
          </AppSelect>
        </div>
        <button type="submit" class="btn btn-accent">Показать</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filters-cars {
  width: 352px;
  border-radius: 28px;
  background: white;
  &_header {
    display: flex;
    padding: 29px 32px;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    i.fa {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: var(--app-accent-color);
      border-radius: 100%;
      font-size: 14px;
    }
  }
  &_body {
    padding: 0 32px 37px;
    .form-control {
      margin-bottom: 10px;
      &:last-of-type {
        margin-bottom: 94px;
      }
    }
    .btn-accent {
      width: 100%;
      border: none;
      height: 56px;
      font-size: 16px;
      border-radius: 28px;
    }
  }
}
</style>
