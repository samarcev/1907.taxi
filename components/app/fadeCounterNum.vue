<template>
  <div class="counter">
    {{ displayValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

// Определяем пропс для числа
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1000, // Длительность анимации в миллисекундах (по умолчанию 1 секунда)
  },
});

// Текущее отображаемое значение
const displayValue = ref(props.value);

// Время начала анимации
let startTime = null;

// Флаг для остановки анимации
let animationFrameId = null;

// Функция для плавного обновления значения
const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;

  const elapsed = timestamp - startTime;
  const progress = Math.min(elapsed / props.duration, 1); // Прогресс анимации (от 0 до 1)

  // Плавное изменение значения
  displayValue.value = Math.round(
    progress * (props.value - displayValue.value) + displayValue.value,
  );

  // Если анимация не завершена, продолжаем
  if (progress < 1) {
    animationFrameId = requestAnimationFrame(animate);
  } else {
    displayValue.value = props.value; // Убедимся, что значение точно совпадает с конечным
  }
};

// Наблюдатель за изменением пропса value
watch(
  () => props.value,
  (newValue) => {
    startTime = null; // Сбрасываем время начала анимации
    cancelAnimationFrame(animationFrameId); // Останавливаем текущую анимацию
    requestAnimationFrame(animate); // Запускаем новую анимацию
  },
);

// Запускаем анимацию при монтировании компонента
onMounted(() => {
  requestAnimationFrame(animate);
});

// Останавливаем анимацию при размонтировании компонента
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.counter {
  font-size: inherit;
  font-weight: bold;
  color: inherit;
  display: inline;
}
</style>
