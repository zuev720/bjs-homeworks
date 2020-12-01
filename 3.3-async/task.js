"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error("Не передан идентификатор звонка");
        }
        if (this.alarmCollection.some(element => element.id === id)) {
            return console.error("Такой звонок существует");
        }
        this.alarmCollection.push({
            id: id,
            callback: callback,
            time: time
        })
    }

    removeClock(id) {
        const checkId = this.alarmCollection.filter(element => element.id === (id))[0];
        const index = this.alarmCollection.indexOf(checkId);
        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
            return "Звонок успешно удален!";
        }
        return "Такого звонка не существует!";
    }

    getCurrentFormattedTime() {
        const now = new Date();
        return now.toTimeString().slice(0, 5);
    }

    start() {
        const now = this.getCurrentFormattedTime;
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(element => checkClock(element));
            }, 60000);
        }
        function checkClock(clock) {
            const checkTime = now();
            if (clock.time === checkTime) {
                return clock.callback();
            }
        }
    }

    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
            console.log("Будильник отключен")
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник ${element.id} прозвенит в ${element.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}

let phoneAlarm = new AlarmClock();

function testCase() {
    phoneAlarm.addClock("09:00", () => console.log('Пора вставать!'), 1);
    phoneAlarm.addClock("09:01", () => {
        console.log('Давай вставай уже!');
        phoneAlarm.removeClock(2)
    }, 2);
    phoneAlarm.addClock("09:01", () => console.log('Иди умываться!'));
    phoneAlarm.addClock("09:02", () => {
        console.log('Вставай, а то проспишь!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("09:05", () => console.log('Вставай, а то проспишь!'), 1);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}