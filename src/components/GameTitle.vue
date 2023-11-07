<template>
  <div class="game-rules">
    <div class="prizes">
      <div>
        <img src="@/assets/svg/Prize.svg" alt="" />
        <p class="about-prize">О призах</p>
      </div>
      <div></div>
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
    <p>Найдите пару и получите гарантированный приз</p>
  </div>
  <div
    style="height: 65%"
    data-bs-scroll="true"
    class="offcanvas offcanvas-bottom rounded-top-5"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-btn mx-auto" data-bs-dismiss="offcanvas" aria-label="Close"></div>
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
          Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел «Акция».
          После этого пользователь автоматически становится участником и получает 1 шанс на участие в розыгрыше основных
          призов.
        </p>
        <p class="info-prize">
          Главная задача участника – накопить как можно больше шансов для выигрыша одного или нескольких основных
          призов. Копите шансы, приглашая друзей по своему промокоду.
        </p>
        <p class="info-prize">
          Вы можете следить за ходом розыгрышей основных призов в прямых эфирах на официальных страничках компании:
        </p>
      </div>
      <h1
        style="font-family: 'Golos Text', sans-serif !important; margin-bottom: 15px"
        class="text-center text-nowrap fs-2 fw-bold"
      >
        Описание призов
      </h1>
      <div class="prizes-description">
        <div>
          <div class="prize-item"><img src="@/assets/prize-photo.svg" alt="" /></div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел
            «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item"><img src="@/assets/prize-photo.svg" alt="" /></div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел
            «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item"><img src="@/assets/prize-photo.svg" alt="" /></div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел
            «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item"><img src="@/assets/prize-photo-2.svg" alt="" /></div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел
            «Акция».
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
    gap: 25px;
    justify-content: space-between;
    & .prizes {
      display: flex;
      align-items: center;
      border-radius: 1000px;
      gap: 15px;
      border: 1px solid #ffeaa5;
      width: 100%;
      background: linear-gradient(90deg, rgba(255, 234, 165, 0.1) 0%, rgba(255, 198, 47, 0.1) 100%);
      box-shadow: -5px 5px 10px 0px rgba(255, 255, 255, 0.1) inset, 3px -5px 10px 0px rgba(17, 65, 48, 0.1) inset;
      backdrop-filter: blur(5px);
      & div {
        display: flex;
        align-items: center;
      }
      & .about-prize {
        color: #f7f7f7;
        text-align: center;
        white-space: nowrap;
        font-family: 'Golos Text', sans-serif !important;
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
      border-radius: 1000px;
      border: 1px solid #0073ff;
      width: 100%;
      background: linear-gradient(90deg, rgba(0, 222, 255, 0.1) 0%, rgba(0, 115, 255, 0.1) 100%);
      box-shadow: -5px 5px 10px 0px rgba(255, 255, 255, 0.1) inset, 3px -5px 10px 0px rgba(17, 65, 48, 0.1) inset;
      backdrop-filter: blur(5px);
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
        font-family: 'Golos Text', sans-serif !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
  .title-game {
    padding: 15px 20px;
    color: #fff;
    text-align: center;
    font-family: 'Golos Text', sans-serif !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    white-space: break-spaces;
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
    font-family: 'Golos Text', sans-serif !important;
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
      font-family: 'Golos Text', sans-serif !important;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      align-self: center;
    }
  }
</style>

<script setup></script>
