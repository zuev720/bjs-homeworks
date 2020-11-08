"use strict";

let data = {
    algebra: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3],
    physics: [3, 4, 5, 4, 5, 4, 3, 5, 3, 4, 5],
    biology: [5, 4, 5, 4, 5, 4, 4, 4, 5, 4, 4],
    geometry: [3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3],
    english: [4, 4, 5, 5, 5, 4, 5, 4, 5, 4, 5],
    geography: [5, 5, 5, 4, 5, 4, 5, 4, 5, 4, 5],
    chemistry: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    music: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    poetry: [4, 4, 4, 4, 3, 4, 5, 4, 3, 4, 3],
    economic: [5, 4, 5, 5, 5, 4, 5, 4, 5, 4, 5],
    russian: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3]
}

let secretObject = {
    aaa: 0,
    bbb: 1
}

// Задание 1

function getSolutions(a, b, c) {
    const D  = Math.pow(b, 2) - (4 * a * c);
    const solutionObject = {
        D: D,
        roots: []
    };

    if (D === 0) {
        solutionObject.roots.push(-b / (2 * a));
    }  else if (D > 0) {
        solutionObject.roots.push((-b + Math.sqrt(D)) / (2 * a));
        solutionObject.roots.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return solutionObject;
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    let messages = [
        `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`,
        `Значение дискриминанта: ${result.D}`
    ];

    if (result.D > 0) {
        messages.push(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else if (result.D === 0) {
        messages.push(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        messages.push("Уравнение не имеет вещественных корней");
    }

    return messages;
}

// Задание 2

function getAverageScore(data) {
    let responseObject = {};

    for (let lessonSubject in data) {
        responseObject[lessonSubject] = getAverageMark(data[lessonSubject]);
    }

    let sum = 0;
    let counter = 0;

    for (let key in responseObject) {
            sum += responseObject[key];
            counter++;
    }
    responseObject.average = (sum / counter > 0) ? (sum / counter) : 0;
    return responseObject;
}

function getAverageMark(marks) {
    let result = 0;

    if (marks.length === 0) {
        return result;
    } else {
        for (let i = 0; i < marks.length; i++) {
            result += marks[i];
        }
        result = result / marks.length;
        return result;
    }
}

// Задание 3

function getPersonData(secretData) {
    return  {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}

function getDecodedValue(secret) {
    return (+secret === 0) ? "Родриго" : "Эмильо";
}