let lang = prompt('Which language to choose', '\'ru\' \'en\'');

if (lang === 'ru') {
  alert('Пн. Вт. Ср. Чт. Пт. Сб. Вс.');
} else if (lang === 'en') {
  alert('Mn. Tu. Wd. Th. Fr. Sa. Sn.');
} else {
  alert('Enter the correct language');
  lang = prompt('Which language to choose', '\'ru\' \'en\'');
}


let namePerson = prompt('Введите имя', 'Александр');

(namePerson === 'Артём') ? console.log('Директор') :
(namePerson === 'Александр') ? console.log('Преподователь') : console.log('студент');