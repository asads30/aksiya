<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="closeModalBackdrop">
      <div
        @click.stop=""
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header id="modalTitle">
          <slot name="header"></slot>
          <img
            draggable="false"
            v-if="headerCloseBtn"
            src="../../assets/svg/Vector.svg"
            alt=""
            class="btn-close"
            @click="sendCancelPool"
            aria-label="Close modal"
          />
        </header>
        <section id="modalDescription">
          <slot name="body"></slot>
        </section>
        <footer>
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              {{ btnName }}
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  btnName: {
    type: String,
    default: "Начать",
  },
  headerCloseBtn: {
    type: Boolean,
  },
  lottieAnimation: {
    type: Boolean,
  },
});

const emit = defineEmits(["close", "closeBtnModal"]);

const close = () => emit("close");
const closeModalBackdrop = () => emit("close");
const sendCancelPool = () => emit("closeBtnModal");
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  max-height: 100dvh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  & .modal {
    z-index: 1;
    padding: 0 20px 10px;
    width: 80%;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    background: #fcfcfc;
    overflow-x: hidden;
    overflow-y: scroll;
    & .btn-green {
      border-radius: 10px;
      background: linear-gradient(0deg, #0073ff 0%, #00c2ff 100%), #fff;
      height: 40px;
      line-height: 40px;
      border: 0;
      width: 100%;
      color: #ffffff;
      display: block;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
    }
    & .btn-close {
      width: 13px;
      height: 12.966px;
      position: absolute;
      top: 20px;
      right: 20px;
      border: none;
      cursor: pointer;
      color: #616380;
      background: transparent;
    }
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active {
  transition: opacity 0.8s ease;
}
.modal-fade-leave-active {
  transition: opacity 0.8s ease;
}
</style>
