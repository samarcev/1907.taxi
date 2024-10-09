<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    default: "modal",
  },
  backDrop: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["close-modal", "opened"]);

const isVisible = ref(props.show);

// Слежение за изменениями props.show
watch(
  () => props.show,
  (newVal) => {
    isVisible.value = newVal;
    if (newVal) {
      disableScroll();
      setTimeout(() => emit("opened"), 50);
    }
  },
);

onBeforeUnmount(() => {
  enableScroll();
});
// Функция для закрытия модального окна
function closeModal() {
  emit("close-modal");
  enableScroll()
  isVisible.value = false;
}
const disableScroll = () => {
  // Сохраняем ширину скроллбара
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  // Применяем стили к body
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollBarWidth}px`;
};

const enableScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};
</script>

<template>
  <teleport to="#teleports">
    <transition name="modal-fade">
      <div
        class="modal-overlay"
        @click="backDrop ? closeModal() : null"
        :id="id"
        v-if="isVisible"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="modal" role="dialog" @click.stop>
          <button
            type="button"
            class="modal-close"
            aria-label="Close modal"
            @click="closeModal()"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 1L1 32"
                stroke="#3C3C3C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1L32 32"
                stroke="#3C3C3C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000, 0.05);
  backdrop-filter: blur(10px);
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-height: 95vh;
    overflow: auto;
    max-width: 100vw;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(#000, 0.15);
    position: relative;
    &-close {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 30px;
      height: 30px;
      background: none;
      border: none;
      font-weight: 300;
      font-size: 31px;
    }
  }
}
</style>
