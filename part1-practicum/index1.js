//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date().getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date().getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date('2023-08-06');
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate() + 10);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const differenceData = futureDate-currentDate;//разница в миллисекундах
console.log(Math.floor(differenceData/1000/3600/24));
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 5);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const diffData = currentDate - pastDate;
console.log(Math.floor(diffData/1000/3600/24));
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7);
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date().getFullYear() + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 7, 7);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const differenceYears = futureYear - new Date().getFullYear();
console.log(differenceYears);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const dateNew = new Date(Date.parse(strDate));
console.log(dateNew);
//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse(strDate));
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const newDate = Date.parse(wrongDate);
if(newDate===NaN) {
    console.log('Неправильный формат даты');
} else{
    console.log(`Правильтный формат даты, результат: ${newDate}`);
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if(number < 0) {
    console.log('Переменная отрицательная');
} else {
    console.log(`Переменная положительная`);
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if(number % 2 === 0) {
    console.log(`Число ${number} чётное`);
} else {
    console.log(`Число ${number} нечётное`);
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if(number % 3 === 0) {
    console.log(`Число ${number} кратно 3`);
} else {
    console.log(`Число ${number} не кратно 3`);
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if(number.length === 1) {
    console.log(`число ${number} является однозначным`);
} else {
    console.log(`Число ${number} не является однозначным`);
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if(number.length === 2) {
    console.log(`Число ${number} является двузначным`);
} else {
    console.log(`Число ${number} не является двузначным`);
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if(number > 0) {
    console.log(`Число ${number} положительное`);
} else if(number === 0) {
    console.log(`Число ${number} равно нулю`);
} else {
    console.log(`Число ${number} отрицательное`);
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if(number % 5 === 0) {
    console.log(`Число ${number} кратно 5`);
} else if(number % 7 === 0) {
    console.log(`Число ${number} кратно 7`);
} else {
    console.log(`Число ${number} не кратно 5 и не кратно 7`);
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if(number < 0) {
    console.log(`Число ${number} отрицательное`);
} else if(number === 0) {
    console.log(`Число ${number} равно нулю`);
} else {
    console.log(`Число ${number} положительное`);
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if( 100 < number < 999) {
    console.log(`Число ${number} является положительным трёхзначным числом`);
} else {
    console.log(`Число ${number} не является положительным трёхзначным числом`);
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let num = 5;
let nameDay = num;
switch(num) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default:
        console.log('Введите число от 1 до 7');
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
        console.log('Север');
        break;
    case 'S':
        console.log('Юг');
        break;
    case 'E':
        console.log('Восток');
        break;
    case 'W':
        console.log('Запад');
        break;
}
