const button = document.querySelector('.button');
const info = document.getElementById('info');
const inputDate = document.querySelector('.inputDate');
const empty = document.getElementById('empty');
//определяем количество оставшихся дней
function countDays () {
    let birthday = document.getElementById('birthday').value;
    let result = document.getElementById('result');
    let msBirthday = Date.parse(birthday);
    let today = new Date();
    let daysOnly = Math.floor((msBirthday - today) / (1000 * 60 * 60 * 24));//получаем количество дней
    result.textContent = daysOnly;
    info.style.visibility = 'visible';
//условия , если не заполнен инпут
    let blankInput = () => {
    if(inputDate.value == '') {
    empty.style.display = 'block';
    info.style.display = 'none';
    } else {
    empty.style.display = 'none';
    info.style.display = 'block';
    }
};
    blankInput();
//Условия для правильного склонения слова 'дня'
    let days = document.getElementById('days');
    let lastDigit = daysOnly % 10;
    let secondLastDigit = Math.floor((daysOnly % 100) / 10);
    if(secondLastDigit === 1) {
    days.textContent = 'дней';
    } else if(lastDigit >= 2 && lastDigit <= 4) {
    days.textContent = 'дня';
    } else if(lastDigit === 1) {
        days.textContent = 'день';
    } else {
        days.textContent = 'дней';
    };
    }
    button.addEventListener('click', countDays);
//Ограничиваем возможность ввода даты до текущего числа включая сегодня
const getNextDayDate = () => {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + 1);

	const day = tomorrow.getDate();
	const month = tomorrow.getMonth() + 1;
	const year = tomorrow.getFullYear();

	const formattedDay = day < 10 ? `0${day}` : day;
	const formattedMonth = month < 10 ? `0${month}` : month;

	return `${year}-${formattedMonth}-${formattedDay}`;
};

inputDate.min = getNextDayDate();
