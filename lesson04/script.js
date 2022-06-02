const strCheck = function(str) {
  if (typeof str != 'string') {
    alert('Введите строковое значение');
  } else {
   return str.trim().length > 30 ? str.trim().slice(0, 30) + '...' : str.trim();
  }
};