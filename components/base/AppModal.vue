<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    default: "modal",
  },
});
defineEmits(['close-modal'])
</script>

<template>
  <teleport to="#teleports">
    <transition name="modal-fade">
      <div
        class="modal-overlay"
        @click="$emit('close-modal')"
        :id="id"
        v-if="show"
        role="dialog"
        ref="modal"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="modal" role="dialog" @click.stop>
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
  }
}

</style>
