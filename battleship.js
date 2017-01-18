/**
 * Created by Александр on 10.01.2017.
 */

function initTable() {
    var table = document.getElementById("table");

    for (var i = 0; i < 7; i++) {
        var row = document.createElement("TR");

        for (var k = 0; k < 7; k++) {

            var td = document.createElement("TD");
            td.innerHTML = i + "" + k;
            td.id = i + "" + k;
            row.appendChild(td);
        }

        table.appendChild(row);
    }
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length != 2) {
        alert("Oops, please enter a letter and letter and number on the board.");
    } else {
        firstChair = guess.charAt(0);
        var row = alphabet.indexOf(firstChair);
        var colomn = guess.charAt(1);

        if (isNaN(row) || isNaN(colomn)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            colomn < 0 || colomn >= model.boardSize) {

            alert("Oops, that off on the board.");
        } else {

            return row + colomn;
        }

    }


    return null;

}


function convert(coordinat) {
    var oneChart = coordinat.charAt(0);
    var change;
    switch (oneChart) {
        case "A":
            change = 0;
            break;
        case "B":
            change = 1;
            break;
        case "C":
            change = 2;
            break;
        case "D":
            change = 3;
            break;
        case "E":
            change = 4;
            break;
        case "F":
            change = 5;
            break;
        case "G":
            change = 6;
            break;
        default:
            break;
    }

    return change + coordinat.charAt(1);
}

var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}


var model = {


    boardSize: 7,
    numShips: 3,
    shipsLength: 3,
    shipsSunk: 0,

    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],


    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            index = ship.locations.indexOf(guess);

            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT")
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }

        view.displayMiss(guess);
        view.displayMessage("You missed.")
        return false;
    },

    isSunk: function (ship) {
        for (var i = 0; i < this.numShips; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }

        return true;
    }


}


var controller = {
    guesses: 0,

    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleship, in " +
                    this.guesses + " guesses");
            }

        }
    }


}


function testView() {
    view.displayMessage("Test display message  !!!")
    view.displayHit("12")
    view.displayMiss("33")
}

function testModel() {
    model.fire("53");

    model.fire("06");
    model.fire("16");
    model.fire("26");

    model.fire("34");
    model.fire("24");
    model.fire("44");

    model.fire("12");
    model.fire("11");
    model.fire("10");
}


initTable();

//testView();

testModel();


var board = document.getElementById("board");
board.setAttribute("class", "board")



