let gameBoard = (function(){

    let board = document.querySelector(".board")

    const makeBoard = () =>{
        for (i = 0; i < 3; i ++){

            for (j = 0; j < 3; j++){
                
                let field = document.createElement("li")
                board.appendChild(field)

            }
        }
    }

    return {
        makeBoard
    }
})()

gameBoard.makeBoard()