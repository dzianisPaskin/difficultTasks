
const date_time1 = function() {

  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let wordEnding = 'часа';

  const now = new Date();
  
  if (now.getHours() >= 2 && now.getHours() <= 4 && now.getHours() > 21) {
        wordEnding = 'часа';
      } else if (now.getHours() > 4 && now.getHours() <= 20) {
        wordEnding = 'часов';
      } else if (now.getHours() === 1 && now.getHours() === 21) {
        wordEnding = 'час';
      } 

  return `Сегодня ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} года, ${now.getHours()} ${wordEnding} ${now.getMinutes()} минут ${now.getSeconds()} секунды`;
};


const formatTime = function(value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value;
};

const date_time2 = function() {

  const now = new Date();
  const day = formatTime(now.getDate());
  const month = formatTime(now.getMonth() + 1);
  const year = now.getFullYear();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  

  return day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds;
};

setInterval(function () {
  document.getElementById('current_date_time_block1').innerHTML = date_time1();
}, 1000);
setInterval(function () {
  document.getElementById('current_date_time_block2').innerHTML = date_time2();
}, 1000);