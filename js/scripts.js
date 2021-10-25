// Task 1
// const x = 10, y = 7;
// const check = x > y ? alert('x больше, чем y') : alert('x не больше, чем y') 

// Task 2
// let num = prompt('Введите не равное нулю число');
// if (num === null || isNaN(num) || num.trim() === '' || num == 0) {
//     alert('Ты не прав, брат')
// }
// else if (num % 2 === 0) {
//     alert("Число " + num + " четное")
// } else {
//     alert("Число " + num + " нечетное")
// }


// Task 3
// let num = prompt ('Введите целое число');
// if (num === null || isNaN(num) || num.trim() === '' || num == 0 || parseFloat(num)) {
//     alert('Ты не прав, брат')
// } else if (num > 0 && num.toString().length === 1) {
//     alert("Число " + num + " однозначное положительное")
// } else if (num < 0 && num.toString().length === 2) {
//     alert("Число " + num + " однозначное отрицательное")
// } else if (num > 0 && num.toString().length === 2) {
//     alert("Число " + num + " двузначное положительное")
// } else if (num < 0 && num.toString().length === 3) {
//     alert("Число " + num + " двузначное отрицательное")
// } else if (num < 0 && num.toString().length >= 4) {
//     alert("Число " + num + " трехзначное или более, отрицательное")
// } else {
//     alert("Число " + num + " трехзначное или более, положительное")
// } 

// Task 4
// let num1 = prompt('Введите число 1')
// let num2 = prompt('Введите число 2')
// let num3 = prompt('Введите число 3')
// if ((num1 === null) || (num2 === null) || (num3 === null)) {
//     alert('Ну как хочешь');
// } else if ((isNaN(num1)) || (isNaN(num2)) || (isNaN(num3))) {
//     alert('Ты не поняль, должны быть числа');
// } else if ((num1.trim() === '') || (num2.trim() === '') || (num3.trim() === '')) {
//     alert('Соберись, тряпка, и попробуй еще разок');
// } else {
//     num1 = +num1;
//     num2 = +num2;
//     num3 = +num3
//     if ((num1 > num2) && (num1 > num3)) {
//         alert (`Первое число ${num1} самое большое`)
//     } else if ((num2 > num1) && (num2 > num3)) {
//         alert (`Второе число ${num2} самое большое`)
//     } else if ((num3 > num1) && (num3 > num2)) {
//         alert (`Третье число ${num3} самое большое`)
//     }  else if ((num1 === num2) && (num2 === num3)) {
//         alert ('Числа равны')
//     }
// }

// Task 5
// сумма углов треугольника 180 градусов, два угла могут 
// быть равны нулю, третий 180 и две стороны действительно
// прилипнут к третьей. Технически это все еще треугольник)

let num1 = prompt('Введите длину первой стороны треугольника в сантиметрах')
let num2 = prompt('Введите длину второй стороны треугольника в сантиметрах')
let num3 = prompt('Введите длину третьей стороны треугольника в сантиметрах')
if ((num1 === null) || (num2 === null) || (num3 === null)) {
    alert('Ну как хочешь');
} else if ((isNaN(num1)) || (isNaN(num2)) || (isNaN(num3))) {
    alert('Ты не поняль, должны быть числа');
} else if ((num1.trim() === '') || (num2.trim() === '') || (num3.trim() === '')) {
    alert('Соберись, тряпка, и попробуй еще разок');
} else if ((num1 <= 0 || num2 <= 0 || num3 <= 0)) {
    alert ('Ну какой же это треугольник, это черная дыра')
} else {
    num1 = +num1;
    num2 = +num2;
    num3 = +num3
    if (num1 + num2 == num3) {
        alert (`Ну какой же это треугольник, это черная дыра`)
    } else if (num2 + num3 == num1) {
        alert (`Ну какой же это треугольник, это черная дыра`)
    } else if (num1 + num3 == num2) {
        alert (`Ну какой же это треугольник, это черная дыра`)
    } else {
        alert ('Нормальный треугольник')
    }
}


