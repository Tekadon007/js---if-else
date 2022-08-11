//! условный оператор
//! тернарный оператор
//! условие () : ()
// let currentUser = true;
// currentUser
//   ? alert("добро пожаловать")
//   : alert("зарегист. или войдите в свой акк");

//2
// let passworld = prompt ("Введите пароль")
// let passworldConfirm = prompt("Подтвердите пароль")
// passworld === passworldConfirm ?
// alert("красава"):
// alert ("не братан это не то")

//3
// let age = prompt("сколько тебе стукнула?")
// age >= 18 ? console.log ("добро пожаловать теперь ты иожешь смотреть хентай") :
// console.log("Иди маме помогай шкет");

//4
// let role = "admin";
// role === "admin"
//   ? alert("Ты не фемка ты здесь батя")
//   : alert("Ты фемка у тебя нет прав");

//5
// let productsCount = 0;
// productsCount > 0
//   ? alert(`в корзине ${productsCount} товаров`)
//   : alert("корзина пуста");

//! if/ if...else / if...else if...else if...else
// let name = prompt("введите имя");
// if (name === "John") {
//   alert(`привет ${name}`);
// }

//2
// let age = 18
// let canDrive = null
// if (age > 17){
//   canDrive = true
// }
// else{
//   canDrive =false
// }
// console.log(canDrive);

//3
// let startTime = 9;
// let arrive = 9
// if(arrive >= startTime){
//   console.log('зайди');
// }
// else{
//   console.log("иди нахуй - закрыто");
// }

//4
// let mum1 = +prompt("первое число");
// let operator = prompt("Математ. оператор");
// let num2 = +promt("второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alse(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// }

//   alert ('ты далбаеп')

//! switch case
// let season = +prompt("выберите сезон");
// switch (season) {
//   // season === 1
//   // "1" === 1
//   // 1 === 1
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("Весна");
//     break;

//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//4
// let num1 = +prompt("первое число");
// let operator = prompt("математ.оператор");
// let num2 = +prompt("второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// }

// CREATE, UPDATE, READ, DELETE -> CRUD - operations
// let action = "say";
// switch (action) {
//   case "CREATE":
//     alert("создан профиль");
//     break;
//   case "READ":
//     alert("есть отображение");
//     break;
//   case "UPDATE":
//     alert("профиль отредактирован");
//     break;
//   case "DELETE":
//     alert("профиль удален");
//     break;
//     default:
//       alert("действия не относится к CRUD!")
// }

// let day = prompt("выберите день недели");
// switch (day) {
//   case "1":
//     console.log("пн");
//     break;
//   case "2":
//     console.log("вт");
//     break;
//   case "3":
//     console.log("ср");
//     break;
//   case "4":
//     console.log("чт");
//     break;
//   case "5":
//     console.log("пт");
//     break;
//   case "6":
//     console.log("сб");
//     break;
//   case "7":
//     console.log("вс");
//     break;
//   case "1":
//     console.log("пн");
//     break;
//   default:
//     console.log("это не день недели ");
// }

// лщгическая И - &&
// let bread = "baton";
// let product1 = "Молоко";
// if (bread === "baton" && product1 === "Молоко") {
//   alert("то что надо");
// } else {
//   alert("Ты слепой что ли?");
// }

// логическая ИЛИ - ||
// let product = "батон"
// let product11 = "лепещка"
// if (product === "лепешка" || product === "батон"){
//   alert ("Э похуй го это тогда")
// }
// else{
//   alert ("Хоть что принеси даун")
// }

//! 10
//! 22:00
// let arrive = prompt ("В сколько вы пришли?")
// if(arrive >= 10 && arrive <= 22){
//  alert ("Заходи братан")
// }
// else{
//   alert("Ты даун ты зачем в 3 часа ночи пришел?")
// }

// данные из БД
// email: user123
// password: isudep007
// const email = prompt("Ты кто почту запеши");
// const password = prompt("И пароль давай");
// if (email === "user123" && password === "isudep007") {
//   alert("АААА все все братан не узнал");
// } else {
//   alert("Не ты не мой господин");
// }

// const email = prompt("Ты кто почту запеши");
// const password = prompt("И пароль давай");
// console.log(email, password);
// console.log(Boolean(email))
// if(email == null || password == null || email === "" || password === "" ){
// alert ("Что то введи даун")
// }
// else{
//   if (email === "user123" && password === "isudep007") {
//     alert("АААА все все братан не узнал");
//   } else {
//     alert("Не ты не мой господин");
//   }
// }

// let password = prompt("введите пароль");
// const tries = 1;
// if (password === "isudep007") {
//   alert("пароль правильный");
// } else {
//   password = prompt("давай еще раз");
//   console.log(password);
//   if (password === "isudep007") {
//     alert("пароль правильный");
//   } else {
//     alert("мы вас заблокали")
//   }
// }

// const email = prompt("введите эл. почту");
// if (email === "user123") {
//   let password = prompt("введите пароль");
//   if (password === "isudep007") {
//     alert("все, ты теперь мой раб");
//   }
// }

// let answer = confirm("Вы хотите покинуть игру?");
// console.log(answer);
// if (answer) {
//   alert("Ты вышел из игры DOTA2 лох");
// }
// else{
//   alert("AAAA маладес ты не лох")
// }

// инкремент - увеличить на 1 (++)
// декремент - уменьшить на 1 (--)
// интерполяция - встроенное выражение

// let likes = 5;
// let answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(вы поставили лайк, всего лайков: ${likes});
// }

// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(вы поставили лайк, всего лайков: ${likes});
// }

// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(вы поставили лайк, всего лайков: ${likes});
// }

// let tasksInClassroom = confirm("вы выполнили задания из классрума?");
// let tasksOnPlatform = confirm("вы выполнили задания из makers.courses?");
// if(tasksInClassroom && tasksOnPlatform) {
//   alert("у вас длинный хуй")
// }
// else{
//   alert("у вас маленький хуй")
// }

// momentum, teamfolw
// let homework = "imd";
// if (homework === "momentum" || homework === "teamfolw") {
//   alert("100 балов")
// }
// else{
//   alert("0 Баллов")
// }