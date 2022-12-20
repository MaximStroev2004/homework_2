const student = "Строев Максим Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
const WeekSem1 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const ExamSem1 = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const Week2Sem = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const lastExam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();
const array = [WeekSem1, ExamSem1, holidays, Week2Sem, lastExam].flat();

console.log(array[1]);
let consolePrice = +prompt ('Стоимость приставки', 23500);
let transportPrice = +prompt ('Стоимость транспорта', 120);
let moneyfrommom = +prompt ('Сумма денег от мамы', 150);
let moneyforlunchfrommom = +prompt ('Сумма денег от мамы на обед', 250);
const transport_difference = moneyfrommom - transportPrice;
let totalmoney = 0;
let days = 0;
if (transport_difference >= 0) {
for (let c= 0; c < array.length; c++) {
if (totalmoney >= consolePrice) {
break
}
if ((array[c] <= 3) && (array[c] > 0)) {
totalmoney = totalmoney + moneyforlunchfrommom + transport_difference
} else if (array[c] > 3) {
totalmoney = totalmoney + transport_difference
}
days++;
continue
}
} else {
alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда')
};

if (totalmoney >= consolePrice) {
alert('Накоплено на приставку за ' + days + ' дней.');
} else {
alert(`На приставку накопить не удалось, но за все время было накоплено ${totalmoney} рублей.`);
};