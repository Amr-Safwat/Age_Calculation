let inputs = document.querySelectorAll('#date');
let age = document.querySelector('.age');
let day = document.querySelector('.day');
let days = document.querySelector('.days');
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');

let btn = document.getElementById('btn');

let result;
let dateNow = new Date();

btn.onclick = () => {
  let value = `${inputs[1].value} ${inputs[2].value} ${inputs[0].value}`;
	let birthday = new Date(value);
	result = dateNow - birthday;
	let fullYears = parseInt(result / 1000 / 60 / 60 / 24 / 365);
	age.innerHTML = `عمرك ${fullYears} سنة`;
	day.innerHTML = `ولدت فى يوم ${showTheDay(birthday.getDay())}`;
	days.innerHTML = `عمرك بالايام ${parseInt(result / 1000 / 60 / 60 / 24)}`;
	hours.innerHTML = `عمرك بالساعات ${parseInt(result / 1000 / 60 / 60)}`;
	minutes.innerHTML = `عمرك بالدقائق ${parseInt(result / 1000 / 60)}`;
};

function showTheDay(dayNum) {
  switch(dayNum) {
    case 0:
      return 'الاحد';
    case 1:
      return 'الاثنين';
    case 2:
      return 'الثلاثاء';
    case 3:
      return 'الاربعاء';
    case 4:
      return 'الخميس';
    case 5:
      return 'الجمعة';
    case 6:
      return 'السبت';
  }
}