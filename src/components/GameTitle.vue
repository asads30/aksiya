<template>
  <div class="game-rules">
    <div class="ripple">
      <div class="prizes">
        <div>
          <img src="@/assets/svg/Prize.svg" alt="" />
          <p class="about-prize">О призах</p>
        </div>
      </div>
    </div>
    <div class="rules">
      <div>
        <button
          type="button"
          class="rule-game"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          Правила игры
        </button>
        <div></div>
      </div>
      <img
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        src="@/assets/svg/Rules.svg"
        alt=""
      />
    </div>
  </div>
  <div class="title-game">
    <p>Найдите пару и получите приз</p>
  </div>
  <div
    style="height: 65%"
    data-bs-scroll="true"
    class="offcanvas offcanvas-bottom rounded-top-5"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div
      class="offcanvas-btn mx-auto"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></div>
    <div style="padding: 15px 0" class="offcanvas-header mx-auto">
      <h5
        style="font-family: 'Golos Text', sans-serif !important"
        class="offcanvas-title text-center text-nowrap fs-2 fw-bold"
        id="offcanvasBottomLabel"
      >
        Информация об призах
      </h5>
    </div>
    <div style="padding: 0 20px" class="offcanvas-body">
      <div class="mb-4">
        <p class="info-prize">
          Чтобы стать участником акции – необходимо пройти идентификацию в
          приложении Click Up и зайти в раздел «Акция». После этого пользователь
          автоматически становится участником и получает 1 шанс на участие в
          розыгрыше основных призов.
        </p>
        <p class="info-prize">
          Главная задача участника – накопить как можно больше шансов для
          выигрыша одного или нескольких основных призов. Копите шансы,
          приглашая друзей по своему промокоду.
        </p>
        <p class="info-prize">
          Вы можете следить за ходом розыгрышей основных призов в прямых эфирах
          на официальных страничках компании:
        </p>
      </div>
      <h1
        style="
          font-family: 'Golos Text', sans-serif !important;
          margin-bottom: 15px;
        "
        class="text-center text-nowrap fs-2 fw-bold"
      >
        Описание призов
      </h1>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo.svg" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo.svg" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo.svg" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo-2.svg" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-rules {
  padding: 0 20px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  & .ripple {
    width: 100%;
    background-position: center;
    transition: background 0.5s;
    & :active {
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }
  }
  & .prizes {
    display: flex;
    align-items: center;
    height: 37px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    gap: 15px;
    transition: background 200ms;
    width: 100%;
    & div {
      height: 27px;
      stroke-width: 0.5px;
      stroke: #ffc62f;
      filter: drop-shadow(0px 2px 8px rgba(255, 198, 47, 0.5));
      display: flex;
      align-items: center;
      & img {
        padding-top: 2px;
      }
    }
    & .about-prize {
      color: #f7f7f7;
      text-align: center;
      white-space: nowrap;
      font-family: "Golos Text", sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
  & .rules {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 37px;
    border-radius: 12px;
    width: 100%;
    transition: background 200ms;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(217, 217, 217, 0.1) center;
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    & div {
      display: flex;
      align-items: center;
    }
    & .rule-game {
      all: unset;
      margin-left: 15px;
      color: #f7f7f7;
      white-space: nowrap;
      text-align: center;
      font-family: "Golos Text", sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    & img {
      padding-top: 2px;
      align-self: center;
    }
    & :active {
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }
  }
}
.title-game {
  padding: 15px 20px;
  color: #fff;
  text-align: center;
  font-family: "Golos Text", sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
  line-height: normal;
}
.offcanvas-btn {
  width: 34px;
  height: 6px;
  margin-top: 20px;
  border-radius: 24px;
  background-color: #e9eaea;
}
.info-prize {
  margin-bottom: 15px;
  color: #04021d;
  font-family: "Golos Text", sans-serif !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
}
.prizes-description {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10px;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  & .prize-item {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 6px;
    position: relative;
    background: #34353f;
    & img {
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
  & .prize-text {
    color: #04021d;
    font-family: "Golos Text", sans-serif !important;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: center;
  }
}

@media screen and (max-width: 300px) {
  .game-rules {
    & .prizes div img {
      width: 37px;
    }
    & .rules img {
      width: 37px;
    }
    .rules {
      .rule-game {
        margin-left: 5px;
      }
    }
  }
}
</style>

<script setup></script>
