let inputs = document.querySelectorAll('#date');
let span = document.querySelector('#val');
let date = document.querySelector('.date');
let age = document.querySelector('.age');
let months = document.querySelector('.months');
let day = document.querySelector('.day');
let days = document.querySelector('.days');
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
var modal = document.getElementById('id01');

let btn = document.getElementById('btn');

let result;
let dateNow = new Date();

btn.onclick = () => {
	showAgeDetails();
};

span.style.visibility = 'hidden';

inputs.forEach((e) => {
	if (e.value !== '') {
		inputs[0].value = '';
		inputs[1].value = '';
		inputs[2].value = '';
	}
});

for (let i = 0; i < inputs.length; i++) {
	inputs[i].style.border = 'none';
}
for (let i = 0; i < inputs.length; i++) {
	inputs[i].oninput = () => {
		inputs[i].style.border = 'none';
	};
}

function showAgeDetails() {
	inputs.forEach((e) => {
		if (e.value !== '') {
			if (
				inputs[0].value !== '' &&
				inputs[1].value !== '' &&
				inputs[2].value !== ''
			) {
				if (
					!isNaN(+inputs[0].value) &&
					!isNaN(+inputs[1].value) &&
					!isNaN(+inputs[2].value)
				) {
					if (
						+inputs[1].value <= 12 &&
						+inputs[1].value > 0 &&
						+inputs[2].value <= 31 &&
						+inputs[2].value > 0
					) {
						span.style.visibility = 'hidden';
						let value = `${inputs[1].value} ${inputs[2].value} ${inputs[0].value}`;
						let valueTwo = `${inputs[2].value}/${inputs[1].value}/${inputs[0].value}`;
						let birthday = new Date(value);
						result = dateNow - birthday;
						let fullYears = parseInt(result / 1000 / 60 / 60 / 24 / 365);
						date.innerHTML = `تاريخ ميلادك هو ${valueTwo}`;
						age.innerHTML = `عمرك ${fullYears} سنة`;
						day.innerHTML = `ولدت فى يوم ${showTheDay(birthday.getDay())}`;
						months.innerHTML = `عمرك بالشهور ${parseInt(
							result / 1000 / 60 / 60 / 24 / 12
						)} شهر`;
						days.innerHTML = `عمرك بالايام ${parseInt(
							result / 1000 / 60 / 60 / 24
						)} يوم`;
						hours.innerHTML = `عمرك بالساعات ${parseInt(
							result / 1000 / 60 / 60
						)} ساعة`;
						minutes.innerHTML = `عمرك بالدقائق ${parseInt(
							result / 1000 / 60
						)} دقيقة`;

							modal.style.right = '0';
					} else {
            span.innerHTML = 'تاريخ غير صحيح';
						span.style.visibility = 'visible';
					}
				} else {
				}
			} else {

			}
		} else {
			e.style.border = '1px solid red';
      span.innerHTML = 'ادخل التاريخ';
      span.style.visibility = 'visible';
		}
	});
}

function showTheDay(dayNum) {
	switch (dayNum) {
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

