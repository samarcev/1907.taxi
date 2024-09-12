<template>
  <div class="app-select" @click="toggleDropdown">
    <div class="app-select-flex">
      <div class="selected-option">
        <slot name="value-trigger" :value="selectedLabel">
          {{ selectedLabel }}
        </slot>
      </div>
      <i class="fa fa-chevron-down"></i>
    </div>
    <div v-if="showOptions && options.length" class="options-list" ref="optionsList">
      <slot
        v-for="(option, index) in options"
        :name="'option'"
        :value="option"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps<{
  modelValue: any; // Может быть любой тип
  options: Array<any>; // Массив любых типов
  placeholder: string; // Placeholder
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: any): void; // Передаем любое значение
}>();

const showOptions = ref(false);
const optionsList = ref();

// Вычисляемое свойство для отображаемого текста выбранного значения
const selectedLabel = computed(() => {
  if (!props.modelValue) return props.placeholder;

  if (typeof props.modelValue === "object") {
    // Если объект, выводим строку с помощью кастомной функции
    return props.modelValue.label || JSON.stringify(props.modelValue);
  }

  return props.modelValue.toString(); // Привести остальные к строке
});

// Обрабатываем клик для открытия/закрытия выпадающего списка
const toggleDropdown = () => {
  showOptions.value = !showOptions.value;

  setTimeout(() => {
    if (!optionsList.value) return;
    optionsList.value.style.opacity = "0";
    const parent = optionsList.value.parentNode;
    const spaceBelow =
      window.innerHeight - parent.offsetTop - parent.clientHeight;
    const dropdownHeight = optionsList.value.offsetHeight; // Высота выпадающего списка

    if (dropdownHeight > spaceBelow) {
      optionsList.value.style.bottom = `100%`;
    } else {
      optionsList.value.style.top = `100%`;
    }
    optionsList.value.style.opacity = "";
  });
};

// Метод для выбора опции
const selectOption = (option: any) => {
  emits("update:modelValue", option);
  showOptions.value = false; // Закрыть список после выбора
};
</script>

<style scoped lang="scss">
.app-select {
  border: 1px solid #e9e9e9;
  padding: 10px 5px;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  &-flex {
    display: flex;
    gap: 8px;
    .selected-option {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 8px;
    }
  }
}
.options-list {
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background: white;
  z-index: 10;
  height: 200px;
  overflow: auto;
}
</style>
