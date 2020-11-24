"use strict";

// Задание 1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map((weapon) => weapon.name);
}

function getCountReliableWeapons(durability) {
    return weapons.filter(weapon => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
    return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
    return weapons.filter(weapon => weapon.durability > durability).map(weapon => weapon.name);
}

function getTotalDamage() {
   return  weapons.map((weapon) => weapon.attack).reduce((sum, current) => sum + current);
}

function getValuesCountToSumValues(arr, sumNumbers){
    let sum = 0;
    let length = 0;

    arr.map(function(elem){
        if(sum < sumNumbers){
            sum += elem;
            length++;
        }
    });

    return length;
}

// Задание 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    // sleep(0); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return  arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function memorize(fn, limit) {
    let memory = [];
    return (...args) => {
        const result = memory.find(answer => compareArrays(answer.args, args));
        if (result) {
            console.log("Достаю из памяти")
            return result.result;
        }

        memory.push({
            args: args,
            result: fn(...args)
        });

        if (memory.length > limit) {
            console.log("Удаляю")
            memory.shift()
        }

        console.log("Вычисляю")
        return fn(...args);
    }
}

console.time("timer");

const tasteArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

function testCase(testFunction, someTimer) {
    for (let i = 0; i < 100; i++){
        tasteArray.forEach(element => testFunction(...element));
    };
    console.timeEnd(someTimer);
};

testCase(sum, "timer");

// timer: 499.4228515625 ms  с замедлением времени
// timer: 0.259765625 ms без замедления