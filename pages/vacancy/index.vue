<script setup lang="ts">
definePageMeta({
  layout: "vacancy",
});
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
    <div class="vacancy-filters">
      <div>
        <span>Вакансии</span>
      </div>
      <button>
        <span> По актуальности </span>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="currentColor" />
          <path
            d="M4.5 16L0.602886 11.5L8.39711 11.5L4.5 16Z"
            fill="currentColor"
          />
        </svg>
      </button>
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
.vacancy-filters {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 12px;
  button {
    display: inline-flex;
    gap: 10px;
    color: var(--app-grey-color);
    background: none;
    border: none;
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
</style>
