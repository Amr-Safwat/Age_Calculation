let input = document.getElementById('date');
let age = document.querySelector('.age');
let day = document.querySelector('.day');
let days = document.querySelector('.days');
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');

let btn = document.getElementById('btn');

let result;
let dateNow = new Date();

btn.onclick = ()=>{
  let birthday = new Date(input.value);
  result = dateNow - birthday;
  let fullYears = parseInt(result / 1000 / 60 / 60 / 24 / 365);
  console.log(fullYears);
  age.innerHTML = `عمرك ${fullYears} سنة`;
  day.innerHTML = `ولدت فى يوم ${showTheDay(birthday.getDay())}`;
}

function msg() {
  h2.innerHTML = `Your Age Is ${fullYears} \n You were born on ${showTheDay()}`;
  document.body.append(h2);
}

function showTheDay(dayNum) {
  switch(dayNum) {
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
    case 7:
      return 'الاحد';
  }
}