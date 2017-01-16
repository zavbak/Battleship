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

var view ={
    displayMessage: function (msg) {
       var messageArea = document.getElementById("messageArea");
       messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss");
    }
}



function testView() {
    view.displayMessage("Test display message  !!!")
    view.displayHit("12")
    view.displayMiss("33")
}



initTable();

testView();



var board = document.getElementById("board");
board.setAttribute("class", "board")



