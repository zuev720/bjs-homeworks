"use strict";

function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    let a1 = a,
        b1 = b,
        c1 = c;
    let decrement  = Math.pow(b1, 2) - 4 * a1 * c1;
    let x = [];
    if (decrement < 0) {
        return x;
    } else if (decrement === 0) {
        x[0] = -b1 / 2 * a1;
    } else {
        x[0] = (-b1 + Math.sqrt(decrement)) / (2 * a1);
        x[1] = (-b1 - Math.sqrt(decrement)) / (2 * a1);
    }
    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let marksArray = marks.slice(0, 5);
    let averageMark = 0;
    if (marks === 0 || marks === NaN || marks === 0) {
        return averageMark;
    } else {
        let sum = 0;
        for (let i = 0; i < marksArray.length; i++) {
            sum += marksArray[i];
        }
        averageMark = (sum > 0) ? sum / marksArray.length : 0;
    }
        return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let userName = name;
    let birthday = dateOfBirthday.getFullYear();
    let now = new Date().getFullYear();
    let age = now - birthday;
    let result;
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${userName}?`;
    } else {
        result = `Сожалею, ${userName}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}