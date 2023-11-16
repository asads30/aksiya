<script setup>
import { computed, ref } from "vue";
import { useGameStore } from "@/stores/GameStore";
import { storeToRefs } from "pinia";

const gameStore = useGameStore();
const { countVisibleCard, startedGame, userCanFlipCard } =
  storeToRefs(gameStore);

const tooltipText = ref(
  "Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum ipsum"
);
const props = defineProps({
  matched: {
    type: Boolean,
    default: false,
  },
  position: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  opened: {
    type: Boolean,
    default: false,
  },
  cardSize: {
    type: Number,
  },
});
const emits = defineEmits(["select-card"]);

const widthCard = computed(() => {
  return +props.cardSize + "px";
});
const heightCard = computed(() => {
  return +props.cardSize + "px";
});
const flippedStyles = computed(() => {
  if (props.visible) {
    return "is-flipped";
  } else {
    return false;
  }
});

const borderedCard = computed(() => {
  if (props.opened && countVisibleCard.value <= 2) {
    return false;
  } else {
    return false;
  }
});

const selectCard = () => {
  // Check to make sure that a card is not already matched
  if (!props.matched && userCanFlipCard.value) {
    if (!props.visible && startedGame.value) {
      gameStore.countVisibleCard += 1;
    }
    emits("select-card", {
      position: props.position,
      faceValue: props.value,
    });
  }
};
</script>

<template>
  <div
    class="card"
    :style="borderedCard"
    :class="flippedStyles"
    @click="selectCard"
  >
    <div class="card-face is-front" :class="{ 'is-border': !props.opened }">
      <span v-tooltip.top="!startedGame ? tooltipText : null">
        <img
          v-if="value !== 'Gift' && value !== 'Present'"
          draggable="false"
          class="card-image"
          :src="`/images/${value}.svg`"
          :alt="value"
        />
        <img
          v-else
          draggable="false"
          class="card-image"
          :src="`/images/${value}.png`"
          :alt="value"
        />
        <img
          draggable="false"
          v-if="matched"
          src="/images/checkmark.svg"
          class="icon-checkmark"
          alt=""
        />
      </span>
    </div>
    <div class="card-face is-back"></div>
  </div>
</template>

<style>
.card {
  width: v-bind(widthCard);
  height: v-bind(heightCard);
  position: relative;
  transition: 0.6s transform ease-in;
  transform-style: preserve-3d;
}
.card.is-flipped {
  border-radius: 12px;
  transform: rotateY(180deg);
}
.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 12px;
  backface-visibility: hidden;
}
.card-face.is-front {
  background: linear-gradient(180deg, #fff 0%, #dcecff 100%) no-repeat center;
  color: white;
  transform: rotateY(180deg);
}
.card-face.is-border {
  border: 2px solid #c5d2d7;
}
.card-face.is-back {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  border: 3px solid #ffffff;
  background: url("../assets/card-bg-empty.svg") no-repeat center;
  background-size: cover;
  color: white;
}
.card-image {
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
}
.icon-checkmark {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
