const board = document.querySelector(".board")
let playingNow 

const gameBoard = (() => {

    
    let boardArray = 
    [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    let id = 1

    
    
    const makeACell = () =>{
        let field = document.createElement("li")
        field.setAttribute("id", `field${id}`)
        id++
        board.appendChild(field)
    }

    const makeBoard = () =>{

        for (i = 0; i < boardArray.length; i ++){
            for (j = 0; j < boardArray[i].length; j++){
                makeACell()
            }
        }
        id = 1

    }

    const rerenderBoard = () =>{
        for (i = 0; i < boardArray.length; i ++){
            for (j = 0; j < boardArray[i].length; j++){
                if(!board.querySelector(`#field${id}`).innerText == ""){
                    boardArray[i][j] = board.querySelector(`#field${id}`).innerText
                    id++
                }else{
                    id++
                }
            }
        }
        id = 1
    }

    return {
        makeBoard,
        rerenderBoard,
        boardArray
    }
})()

gameBoard.makeBoard()
let boardArray = gameBoard.boardArray

const gameState = (() => {

    const checkWin = () =>{


        let transposedBoardArray = boardArray[0].map((_, colIndex) => boardArray.map(row => row[colIndex]));
        const isXorO = (element, n, row) => {
            if(element === row[0] && !(element === 0)){
                return true
            }
            return false
        }


        const checkRows = (array) =>{
            
            for (let i = 0; i < array.length; i++){
  
                let isRowWinning = array[i].every(isXorO)

                if(isRowWinning){
                    
                    return true
                }
    
            }
        
        return false

        };
        

        if(checkRows(boardArray)){
            return true
        }else if(checkRows(transposedBoardArray)){
            return true
        }

        return false
    }

    const checkTie = () => {
        for(i=0; i<boardArray.length;i++){
            if(!(boardArray[i].includes(0))){
                return true
            }
        }
        return false
    }
 
    const isFirstTurn = () =>{ 

        for(i=0;i<boardArray.length;i++){
            for(j=0; j<boardArray[i].length;j++){
                console.log(boardArray[i][j])
                if(!(boardArray[i][j] === 0)){
                    return false
                }
            }
        }
    return true
    }

    const nextPlayer = (currentPlayer) =>{ 

        let nextPlayer
        if(currentPlayer === "X"){
            nextPlayer = "O"
        }else if (currentPlayer === "O"){
            nextPlayer = "X"
        }

    return nextPlayer
    }

    return{
        checkWin,
        checkTie,
        isFirstTurn,
        nextPlayer
    }

})()


const player = (mark) =>{

    let score = 0;
    let name = `Player ${mark}`

    const addToScore = () =>{

    }

    return{
        
    }
}

let playerX = player("X")
let playerO = player("O")

board.addEventListener("click", (e) =>{
    if(gameState.isFirstTurn()){
        e.target.innerText = "X"
        playingNow = gameState.nextPlayer("X")
        gameBoard.rerenderBoard()
        gameState.checkWin()
        gameState.checkTie()
    }else{
        e.target.innerText = playingNow
        playingNow = gameState.nextPlayer(playingNow)
        gameBoard.rerenderBoard()
        gameState.checkWin()
        gameState.checkTie()
    }
})

console.log(gameState.isFirstTurn())
