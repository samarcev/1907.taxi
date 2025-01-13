<script setup lang="ts">
import FadeCounterNum from "~/components/app/fadeCounterNum.vue";

definePageMeta({
  layout: "income",
});
function onToggle(item: any) {
  const details = item[0] as HTMLDetailsElement;
  details.open = !details.open;
}
function getMockAvatar(idx: number) {
  return 'https://thispersondoesnotexist.com/?v='+ idx
}
</script>

<template>
  <div class="container">
    <div class="total-information">
      <div class="total-information-candidates">
        <div class="total-information-label">Устроилось:</div>
        <div class="total-information-value">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
              stroke="#FFD502"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
              stroke="#FFD502"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <fade-counter-num :value="24" :duration="3000"></fade-counter-num>
        </div>
      </div>
      <span class="space-line"></span>
      <div class="total-information-ready-form-payment">
        <div class="total-information-label">
          <span> К выплате: </span>
          <button class="btn btn-success">Вывести</button>
        </div>
        <div class="total-information-value">
          <fade-counter-num :value="14_000" /><small
            ><sub style="vertical-align: bottom">₽</sub></small
          >
        </div>
      </div>
    </div>
    <div class="user-list-filters">
      <div>Пользователи</div>
      <button>
        <span> По актуальности </span>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="currentColor" />
          <path
            d="M4.5 16L0.602886 11.5L8.39711 11.5L4.5 16Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div class="user-list">
      <div class="user-list__item-wrapper" v-for="item in 10" :key="item">
        <div class="user-list__item">
          <img
            class="user-list__item-avatar"
            :src="getMockAvatar(item)"
            loading="lazy"
            alt=""
          />
          <div class="user-list__item-body">
            <div class="user-list__item-body-top">
              <div class="user-list__item-username">AndryGolagr</div>
              <button
                class="toggle-footer-btn"
                @click="onToggle($refs[`details_` + item])"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.09998 9.5L9.49998 12.9L12.9 9.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 6.1001V12.9001"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="user-list__item-body-main">
              <div class="info-block">
                <div class="info-block-label">Статус</div>
                <div class="info-block-value">
                  <span style="color: var(--app-green-color)">Устроился</span>
                </div>
              </div>
              <div class="info-block">
                <div class="info-block-label">Отработка</div>
                <div class="info-block-value">
                  <span>14 дней</span>
                </div>
              </div>
              <div class="info-block">
                <div class="info-block-label">Привлёк</div>
                <div class="info-block-value">
                  <svg
                    width="11"
                    height="9"
                    viewBox="0 0 11 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.875 3.875V2.5H9.625V3.875H11V4.625H9.625V6H8.875V4.625H7.5V3.875H8.875ZM3.416 4.675C3.048 4.239 2.75 3.425 2.75 2.855V2C2.75 1.46957 2.96071 0.960859 3.33579 0.585786C3.71086 0.210714 4.21957 0 4.75 0C5.28043 0 5.78914 0.210714 6.16421 0.585786C6.53929 0.960859 6.75 1.46957 6.75 2V2.855C6.75 3.425 6.45 4.2415 6.084 4.676L5.9035 4.89C5.6085 5.2395 5.7005 5.684 6.113 5.885L8.943 7.266C9.2505 7.416 9.5 7.8125 9.5 8.1575V8.501C9.49973 8.63352 9.44687 8.76052 9.35302 8.85408C9.25918 8.94765 9.13202 9.00013 8.9995 9H0.5C0.367565 9 0.240539 8.94746 0.1468 8.85391C0.0530602 8.76036 0.00026487 8.63344 0 8.501V8.1575C0 7.815 0.249 7.416 0.557 7.2655L3.387 5.8845C3.7975 5.6845 3.893 5.2405 3.597 4.8895L3.416 4.675Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>20</span>
                </div>
              </div>
              <div class="info-block">
                <div class="info-block-label">Начислено</div>
                <div class="info-block-value">
                  <span>15 000₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <details class="user-list__item-footer" :ref="`details_` + item">
          <summary style="display: none"></summary>
          <div>
            <div>
              <span>Привлёк: </span> <span>{{ item }} пользователей</span>
            </div>
            <div>
              <span>Начислено: </span> <span><b>24 000</b>₽</span>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-left: 20px;
  padding-right: 20px;
}
.space-line {
  display: block;
  width: 1px;
  background-color: #404040;
}
.total-information {
  display: flex;
  background-color: var(--app-default-text-color);
  border-radius: 20px;
  padding: 30px;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  gap: 30px;
  justify-content: center;
  margin-bottom: 20px;
  &-label {
    height: 19px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    .btn-success {
      border: none;
      font-size: 12px;
      height: 19px;
    }
  }
  &-value {
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: clamp(35px, 3vw, 40px);
    font-weight: 500;
    width: 100%;
    text-align: center;
    height: 56px;
  }
  &-ready-form-payment {
    .total-information-value {
      white-space: nowrap;
      justify-content: flex-start;
    }
  }
}
.user-list-filters {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 12px;
  button {
    display: inline-flex;
    gap: 10px;
    color: var(--app-grey-color);
    background: none;
    border: none;
  }
}
.user-list {
  display: flex;
  flex-flow: column;
  gap: 8px;
  &__item-wrapper {
    flex-flow: column;
  }
  &__item {
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    padding: 16px;
    gap: 16px;
    &-avatar {
      width: 58px;
      height: 58px;
      border-radius: 100%;
      background-color: #f3f3f3;
      flex: 0 0 auto;
    }
    &-username {
      font-size: 14px;
      font-weight: 500;
    }
    &-body {
      flex: 1;
      font-size: 10px;
      overflow: hidden;
      &-top {
        border-bottom: 1px solid #d9d9d9;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        padding-bottom: 4px;
        .toggle-footer-btn {
          background: none;
          border: none;
          color: var(--app-grey-color);
        }
      }
      &-main {
        display: flex;
        gap: 15px;
        justify-content: space-between;
        padding-top: 5px;
        padding-bottom: 5px;
        overflow: auto;
        .info-block {
          display: inline-flex;
          flex-flow: column;
          gap: 1px;
          &-label {
            color: #a5a5a5;
          }
          &-value {
            font-size: 12px;
            color: var(--app-default-text-color);
            font-weight: 500;
            display: inline-flex;
            gap: 4px;
            align-items: center;
          }
        }
      }
    }
    &-footer {
      & > div {
        display: flex;
        overflow: hidden;
        transition: grid-template-rows 0.3s ease-in-out;
        justify-content: space-between;
        gap: 20px;
        font-size: 12px;
        padding: 17px 16px;
      }
      &[open] > div {
        grid-template-rows: 1fr;
      }
    }
  }
}
</style>
