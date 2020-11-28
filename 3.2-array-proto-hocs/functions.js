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

function getValuesCountToSumValues(arr, total) {
    let count = 1;
    arr.reduce((sum, element) => {
        sum += element;
        if (sum < total) {
            count++;
        }
        return sum;
    }, 0)
    return count;
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
        let result = memory.find(answer => compareArrays(answer.args, args));
        if (result) {
            console.log("Достаю из памяти")
            return result.result;
        }
        else {
            result = fn(...args);
            memory.push({
                args: args,
                result: result
            });

            if (memory.length > limit) {
                console.log("Удаляю")
                memory.shift()
            }

            console.log("Вычисляю")
            return result;
        }
    }
}


const tasteArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

function testCase(testFunction, someTimer) {
console.time("timer");

    for (let i = 0; i < 100; i++){
        tasteArray.forEach(element => testFunction(...element));
    };
    console.timeEnd(someTimer);
};

testCase(sum, "timer");

// timer: 499.6240234375 ms  с замедлением времени
// timer: 0.27099609375 ms без замедления