<template>
  <div class="pushtab">
    <div class="container">
      <ul class="nav nav-tabs pushtab-nav" id="promoTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            @click="!getActiveTab"
            :class="getActiveTab === true ? 'nav-link' : 'nav-link active'"
            id="promo-tab"
            data-bs-toggle="tab"
            data-bs-target="#promo-tab-pane"
            type="button"
            role="tab"
            aria-controls="promo-tab-pane"
            aria-selected="true"
          >
            У меня есть промокод
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            @click="!getActiveTab"
            :class="getActiveTab === false ? 'nav-link' : 'nav-link active'"
            id="aksiya-tab"
            data-bs-toggle="tab"
            data-bs-target="#aksiya-tab-pane"
            type="button"
            role="tab"
            aria-controls="aksiya-tab-pane"
            aria-selected="false"
          >
            Я самостоятельно узнал(а) об акции
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="tab-content" id="promoTabContent">
    <div
      :class="
        getActiveTab === true ? 'tab-pane fade' : 'tab-pane fade show active'
      "
      id="promo-tab-pane"
      role="tabpanel"
      aria-labelledby="promo-tab"
      tabindex="0"
    >
      <div class="promo-wrapper">
        <div class="container">
          <p class="promo-text">
            Введите промокод от друга, чтобы увеличить шансы на победу у обоих!
          </p>
          <div v-for="i in 2" :key="i">
            <div class="rules-promo">
              <img src="@/assets/svg/check.svg" alt="" />
              <p>возможность поиграть в игру</p>
            </div>
          </div>
          <form>
            <input
              class="promo-input"
              type="text"
              inputmode="text"
              pattern="/^[A-Z0-9]*$/"
              required
              minlength="5"
              maxlength="8"
              placeholder="Введите код приглашения"
            />
          </form>
        </div>
      </div>
    </div>
    <div
      :class="
        getActiveTab === false ? 'tab-pane fade' : 'tab-pane fade show active'
      "
      id="aksiya-tab-pane"
      role="tabpanel"
      aria-labelledby="aksiya-tab"
      tabindex="0"
    >
      <div class="aksiya-wrapper">
        <div class="container">
          <p class="aksiya-text">После нажатия вы получите:</p>
          <div v-for="i in 2" :key="i">
            <div class="rules-aksiya">
              <img src="@/assets/svg/check.svg" alt="" />
              <p>возможность поиграть в игру</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
