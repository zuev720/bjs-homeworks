'use strict';

//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function isPalindrome () {
    const string = this.toLowerCase().split(" ").join("");
    const reversString = this.toLowerCase().split("").reverse().join("").replace(/\s+/g, '');

    if (string === reversString) {
        return true;
    } else {
        return false;
    }
};

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark = 0;

    if (marks.length === 0) {
        return averageMark;
    } else {
        for (let i = 0; i < marks.length; i++) {
            averageMark += marks[i];
        }
    }
    averageMark = Math.round(averageMark / marks.length);
    return averageMark;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь

    const now = new Date();
    let diff = (+now) - Date.parse(birthday);
    let age = Math.round(diff / (1000 * 60 * 60 * 24 * 365.25));
    let verdict = (age >= 18) ? true : false;
    return verdict
}