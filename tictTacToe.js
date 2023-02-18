const board = document.querySelector(".board")
let playingNow 

const gameBoard = (() => {

    
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
            }
        }
        id = 0

    }

    const rerenderBoard = () =>{
        for (i = 0; i < boardArray.length; i ++){
            for (j = 0; j < boardArray[i].length; j++){
               
                boardArray[i][j] = board.querySelector("id", id).textContent
                id++
            }
        }
        id = 0
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
            if(element === row[0] && !element === 0){
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
            if(!boardArray[i].contains(0)){
                return true
            }
        }
        return false
    }
 
    const isFirstTurn = () =>{
        for(i=0;i<boardArray.length;i++){
            if(boardArray[i].every((el)=>{
                el === 0
            })){
                return true
            }
        }
        return false

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
        checkTie
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

console.log(playerX.name)

console.log(boardArray)
console.log(gameState.checkWin())
