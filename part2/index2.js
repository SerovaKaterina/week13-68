const button = document.querySelector('.button');
const info = document.getElementById('info');
const inputDate = document.querySelector('.inputDate');
const empty = document.getElementById('empty');
//определяем количество оставшихся дней
function countDays () {
    let birthday = document.getElementById('birthday').value;
    let msBirthday = Date.parse(birthday);
    let today = new Date();
    let daysOnly = Math.floor((msBirthday - today) / (1000 * 60 * 60 * 24));//получаем количество дней
    let result = document.getElementById('result');
    result.textContent = daysOnly;
    info.style.visibility = "visible";
//условия , если не заполнен инпут
    let blankInput = () => {
    if(inputDate.value == "") {
    empty.style.display = "block";
    info.style.display = "none";
    } else {
    empty.style.display = "none";
    info.style.display = "block";
    }
};
    blankInput();
//Условия для правильного склонения слова 'дня'
    let days = document.getElementById('days');
    let lastDigit = daysOnly % 10;
    let secondLastDigit = Math.floor((daysOnly % 100) / 10);
    if(secondLastDigit === 1) {
    days.textContent = "дней";
    } else {
    if(lastDigit >= 2 && lastDigit <= 4) {
    days.textContent = "дня";
    } else {
    if(lastDigit === 1) {
        days.textContent = "день";
    } else {
        days.textContent = "дней";
    }
    }
    }
}
button.addEventListener('click', countDays);