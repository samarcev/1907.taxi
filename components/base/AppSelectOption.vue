<template>
  <div class="option" @click="select">
    <slot>{{ optionDisplay }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  value: any; // Принимаем любой тип
}>();

const emit = defineEmits<{
  (e: "select", value: any): void;
}>();

// Выводим отображаемое значение
const optionDisplay = computed(() => {
  if (typeof props.value === "object" && props.value !== null) {
    return props.value.label || JSON.stringify(props.value);
  }
  return props.value!.toString(); // Привести к строке для чисел или строк
});

// Метод для выбора опции
const select = () => {
  emit("select", props.value);
};
</script>

<style scoped>
.option {
  padding: 10px;
  cursor: pointer;
}
.option:hover {
  background: #f0f0f0;
}
</style>
