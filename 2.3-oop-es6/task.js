'use strict';

// Задание 1

class PrintEditionItem {

    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix () {
        this.state = this.state * 1.5;
    }

    get state () {
        return this._state;
    }

    set state (value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine"

    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
    }
}

class Book extends PrintEditionItem {
    type = "book"

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel"
}

class FantasticBook extends Book {
    type = "fantastic"
}

class DetectiveBook extends Book {
    type = "detective"
}


// Задание 2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName (bookName) {
        let issuedBook = this.findBookBy("name", bookName);
        this.books.splice(issuedBook, 1);
        return issuedBook;
    }
}

// Задание 3

class StudentLog {
    constructor (name) {
        this.name = name;
        this.journaleClass = {};
    }
    getName () {
        return this.name;
    }

    set (value) {
        this.getName = value;
    }

    addGrade (grade, subject) {
        if (this.journaleClass[subject]) {
            if (grade >= 1 && grade <= 5) {
                this.journaleClass[subject].push(grade);
            } else {
                return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
            }
        } else {
            if (grade >= 1 && grade <= 5) {
                this.journaleClass[subject] = [grade];
            } else {
                return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
            }
        }
        return this.journaleClass[subject].length;
    }

    getAverageBySubject (subject) {
        for (let i = 0; i < Object.keys(this.journaleClass).length; i++) {
            if (Object.keys(this.journaleClass)[i] === subject) {
                let sum = 0;
                for (let j = 0; j < this.journaleClass[subject].length; j++) {
                    sum += this.journaleClass[subject][j];
                }
                return sum / this.journaleClass[subject].length;
            }
        }
        return 0;
    }

    getTotalAverage () {
        let sum = 0;
        let counter = 0;
        for (let subject in this.journaleClass) {
            sum += this.getAverageBySubject(subject);
            counter ++;
        }
        return sum / counter;
    }
}