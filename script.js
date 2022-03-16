
const board = [
    null, 0,    null, 1,   null, 2,     null, 3,
    4,    null, 5,    null, 6,   null,  7,    null,
    null, 8,    null, 9,    null, 10,   null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12,   null, 13,   null, 14,   null, 15,   null,
    null, 16,   null, 17,   null, 18,   null, 19,
    20,   null, 21,   null, 22,   null, 23,   null
]

let redsPieces = document.querySelectorAll("p");
let cells = document.querySelectorAll("td");

for (let i = 0; i < redsPieces.length; i++){
//redsPieces[10].addEventListener("click", prtnr(10));
redsPieces[i].addEventListener("click", prtnr.bind(event, i));
}

function prtnr(x) {
    //window.alert("click red");
    let indexBoard = findIndex(x);
    cells[indexBoard+9].setAttribute("onclick", "move(" + x + ")");
    //cells[indexBoard+7].addEventListener("click", prtnr2);
    //cells[indexBoard+7].addEventListener("click", right);
}

function move(mv){
    let indexBoard = findIndex(mv);
    //document.getElementById(mv).remove();
    
    //cells[mv].innerHTML = "";
    cells[indexBoard].innerHTML = "";

    cells[indexBoard + 9].innerHTML = `<p class="red-piece" id="${mv}"></p>`;
    redsPieces = document.querySelectorAll("p");
}
function right() {
    
    if(board[9+9] == null){
        window.alert("move right");

    }

}

function prtnr2() {
    
    if(board[9+7] == null){
        window.alert("move left");

    }

}
function findIndex(indx) {
    for (let i = 0; i < board.length; i++){
        
        if(indx == board[i]){
            return i;
        }
    } 
    window.alert("Noob");
}

if(document.getElementById('0').clicked == true)
{
   window.alert("button was clicked");
}


