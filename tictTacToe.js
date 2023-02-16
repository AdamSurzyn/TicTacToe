let gameBoard = (function(){

    let board = document.querySelector(".board")
    let boardArray = 
    [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    const makeBoard = () =>{
        for (i = 0; i < boardArray.length; i ++){
            for (j = 0; j < boardArray[i].length; j++){
                
                let field = document.createElement("li")
                board.appendChild(field)

            }
        }
    }

    return {
        makeBoard
    }
})()

let somethingToLog = "log meeeee"
gameBoard.makeBoard()