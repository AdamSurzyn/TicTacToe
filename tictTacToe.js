const gameBoard = (() => {

    let board = document.querySelector(".board")
    let boardArray = 
    [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    let id = 0

    
    
    const makeACell = () =>{
        let field = document.createElement("li")
        field.setAttribute("id", `field${id+1}`)
        id++
        board.appendChild(field)
    }

    const makeBoard = () =>{
        for (i = 0; i < boardArray.length; i ++){
            for (j = 0; j < boardArray[i].length; j++){
                makeACell()
                boardArray[i][j] = ""
                
            }
        }
        id = 0

    }

    const rerenderBoard = () =>{
        for (i = 0; i < boardArray.length; i ++){
            for (j = 0; j < boardArray[i].length; j++){
               
                board.querySelector("id", id).textContent = boardArray[i][j].toString()
                id++
            }
        }
        id = 0
    }

    return {
        makeBoard,
        boardArray
    }
})()

gameBoard.makeBoard()
let boardArray = gameBoard.boardArray


const gameState = (() => {

    const checkWin = (boardArray) =>{

        let isXorO = (cell) => (cell == "X" || "O")

        const checkRows = boardArray.array.forEach(row => {
            row.every(isXorO)
        });
        
    }

    const checkTie = () => {

    }



})()


const player = (playerSign) =>{

    let score = 0;
    let mark = this.playerSign

    const choosePoint = () =>{

    }

}