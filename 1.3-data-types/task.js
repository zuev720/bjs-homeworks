"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let totalAmount;
    let monthlyPayment;
    let now = new Date();
    let numberPaidMonths = Math.round(((date - now) / ((1000 * 60 * 60 * 24 * 365) / 12)));
    if (isNaN(percent && contribution && amount) || (date == "Invalid Date")) {
        totalAmount = "Введены неверные данные";
    } else {
    let bodyCredit = amount - contribution;
    percent = percent / 100 / 12;
    monthlyPayment =  bodyCredit * percent / (1 - Math.pow(1 + percent, -numberPaidMonths));
    totalAmount = monthlyPayment * numberPaidMonths;
    totalAmount = Number(totalAmount.toFixed(2));
    }
        return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    name = (name === "" || name === null || name === undefined) ? "Аноним": name;
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}