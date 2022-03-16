//array containing all checker pieces to track movement
//every piece has a different int value
board = [
    null, 0,    null, 1,   null, 2,     null, 3,
    4,    null, 5,    null, 6,   null,  7,    null,
    null, 8,    null, 9,    null, 10,   null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12,   null, 13,   null, 14,   null, 15,   null,
    null, 16,   null, 17,   null, 18,   null, 19,
    20,   null, 21,   null, 22,   null, 23,   null
]

//tracks how much red pieces are in the board
let redsPieces = document.querySelectorAll("p");

//determines the size of the board
let cells = document.querySelectorAll("td");

//checks if any red piece is clicked calls clicked by passing i as id
for (let i = 0; i < redsPieces.length; i++){
    redsPieces[i].addEventListener("click", clicked.bind(event, i));
}

//used when we click a red piece
function clicked(id) {
    //window.alert("click red");

    //finds where piece with id value is on the board
    let indexBoard = findIndex(id);
    
    //move to the right when we click the a valid move to the right side
    //call move(id) to move
    cells[indexBoard+9].setAttribute("onclick", "move(" + id + "," + 9 + ")");
    cells[indexBoard+7].setAttribute("onclick", "move(" + id + "," + 7 +")");

}

function move(mv, dir){

    let indexBoard = findIndex(mv);
    //document.getElementById(mv).remove();
    
    //cells[mv].innerHTML = "";
    cells[indexBoard].innerHTML = "";
    
        cells[indexBoard + dir].innerHTML = `<p class="red-piece" id="${mv}"></p>`;
        moveBoard(mv, indexBoard + dir);
    
    redsPieces = document.querySelectorAll("p");


}

function moveBoard(start, end){
    let indexBoard = findIndex(start);
    board[end] =  start; 
    board[indexBoard] = null;
    window.alert(indexBoard);

    

}

function findIndex(indx) {
    for (let i = 0; i < board.length; i++){
        
        if(indx == board[i]){
            return i;
        }
    } 
    window.alert(indx + "    Noob");
}




