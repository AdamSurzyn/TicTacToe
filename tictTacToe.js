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
                boardArray[i][j] = "X"
                
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

const gameState = (() => {

    const checkWin = () =>{


        let boardArray = gameBoard.boardArray

        let transposedBoardArray = boardArray[0].map((_, colIndex) => boardArray.map(row => row[colIndex]));
        const isXorO = (element) => {
            return (element === "X" || element === "O")
        }

        /*
        *******************
        check what is being returned and checked in checkrows function, 
        maybe figure out a way for it to be less complicated
        *******************
        */

        const checkRows = (array) => array.forEach((row) => {
            console.log(row.every(isXorO))
            let isRowWinning = row.every(isXorO)
            if(isRowWinning){
                return array[0][0]
            }
        });

        if(checkRows(boardArray) === "X" || checkRows(boardArray) === "O"){
            return `Player ${checkRows(boardArray)} wins!`
        }
    }

    const checkTie = () => {

    }

    return{
        checkWin
    }

})()

gameState.checkWin()

const player = (playerSign) =>{

    let score = 0;
    let mark = this.playerSign

    const choosePoint = () =>{

    }

}