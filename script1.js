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

let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

//tracks how much red pieces are in the board
let redsPieces = document.querySelectorAll("p");

//determines the size of the board
let cells = document.querySelectorAll("td");


function start() {
    //redsPieces = document.querySelectorAll("p");
    //cells = document.querySelectorAll("td");
    
    

    //checks if any red piece is clicked calls clicked by passing i as id
    for (let i = 0; i < redsPieces.length; i++){
        //let j = notNull(i);
        redsPieces[i].addEventListener("click", clicked.bind(event, i));
        
    }
}

function notNull(indx){
    console.log(indx);
    n = 0;
    for (let i = 0; i < board.length; i++){
        
        if(indx == board[i]){
            console.log(i-n);
            return i-n;
        }
        if(indx == null){
            n = n + 1;
        }
    } 
    console.log(indx + "    Noozzzzzzzzzzzzzzzb");
}

function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        // console.log("i: "+i);
        cells[i].removeAttribute("onclick");

    }
}

function resetSelectedPieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.pieceId = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusNinthSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
}

let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
};

//used when we click a red piece
function clicked(idz) {
    console.log("id: "+idz);
    removeCellonclick();
    resetSelectedPieceProperties();

    selectedPiece.pieceId = parseInt(event.target.id);

    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    // for (let i = 0; i < redsPieces.length; i++) {
    //     redsPieces[i].removeEventListener("click", clicked.bind(event, i));
    // }
    //window.alert("click red");

    //finds where piece with id value is on the board
    let indexBoard = findIndex(idz);
    //document.getElementById(id);

    document.getElementById(idz).style.border = "3px solid green";

    //move to the right when we click the a valid move to the right side
    //call move(id) to move
    //removeEventListener("click", clicked);
    cells[indexBoard+9].setAttribute("onclick", "move(" + idz + "," + 9 + ")");
    //oppsite direciton(left)
    cells[indexBoard+7].setAttribute("onclick", "move(" + idz + "," + 7 +")");
     //cells[indexBoard+9].addEventListener("click", move.bind(event, id, 9));

     //cells[indexBoard+7].addEventListener("click", move.bind(event, id, 7));
    
    // cells[indexBoard+7] = ("onclick", "move(" + id + "," + 7 +")");
    // cells[indexBoard+9] = ("onclick", "move(" + id + "," + 9 +")");
    
}

function move(mv, dir){
    document.getElementById(selectedPiece.pieceId).remove();
    cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
    
//    document.getElementById(mv).remove();
    // for (let i = 0; i < redsPieces.length; i++) {
    //      redsPieces[i].removeEventListener("click", clicked.bind(event, i));
    // }

    
    // for (let i = 0; i < cells.length; i++) {
    //      cells[i].removeAttribute("onclick");
    // }
    //removeCellonclick();
    let indexBoard = findIndex(mv);
    //let end = findIndex(mv.length);
    // if(indexBoard > end){
    //     let temp = redsPieces[mv.length];
    //     console.log(redsPieces[mv.length-1] + " + " + redsPieces[mv])
    //     redsPieces[mv.length] = redsPieces[mv];
    // }

    //html removes piece 
    //cells[indexBoard].innerHTML = "";
    
    //cells[indexBoard + dir].innerHTML = `<p class="red-piece" id="${mv}"></p>`;

    cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="red-piece" id="${selectedPiece.pieceId}"></p>`;
    redsPieces = document.querySelectorAll("p");


    // for (let i = 0; i < redsPieces.length; i++){
    //     if(document.getElementById(mv) != i)
    // }
    

    moveBoard(mv, indexBoard + dir);
    

    // for (let i = 0; i < redsPieces.length; i++){
    //     redsPieces[i].addEventListener("click", clicked.bind(event, i));
    // }
    // removeCellonclick();
    // for (let i = 0; i < redsPieces.length; i++) {
    //     redsPieces[i].removeEventListener("click", clicked.bind(event, i));
    // }

//     for (let i = 0; i < cells.length; i++) {
//         cells[i].removeEventListener("click", clicked.bind(event, mv, 7));
//    }
//     for (let i = 0; i < cells.length; i++) {
//          cells[i].removeEventListener("click", clicked.bind(event, mv, 9));
//     }

    resetSelectedPieceProperties();
    removeCellonclick();
    removeEventListeners();

    start();


}

function removeEventListeners() {
    for (let i = 0; i < redsPieces.length; i++) {
        redsPieces[i].removeEventListener("click", clicked.bind(event, i));
    }
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
start();




