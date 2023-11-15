import { ref } from "vue";

export const useMinuteCountDown = () => {
  const secondsTimeLine = ref(0);
  const timeEnded = ref(false);
  const intervalTimeout = ref(null);
  const startCountDownGame = () => {
    function addMinutes(date, minutes) {
      date.setSeconds(date.getSeconds() + 1);
      date.setMinutes(date.getMinutes() + minutes);
      return date;
    }
    const countDownDate = addMinutes(new Date(), 2); // deadline
    intervalTimeout.value = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      secondsTimeLine.value = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        timeEnded.value = true;
        clearInterval(intervalTimeout.value);
      }
    }, 1000);
  };

  return { secondsTimeLine, startCountDownGame, timeEnded, intervalTimeout };
};
