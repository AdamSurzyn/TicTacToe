
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
let boardArray = gameBoard.boardArray
const gameState = (() => {

    const checkWin = () =>{

        let win = ["X", "O"]

        let transposedBoardArray = boardArray[0].map((_, colIndex) => boardArray.map(row => row[colIndex]));
        const isXorO = (element, n, row) => {
            if(element === row[0]){
                return true
            }
            return false
        }

        /*
        *******************
        check what is being returned and checked in checkrows function, 
        maybe figure out a way for it to be less complicated
        *******************
        */



        const checkRows = (array) =>{
            
            for (let i = 0; i < array.length; i++){

                let isRowWinning = array[i].every(isXorO)

                if(isRowWinning){
                    
                    return true
                }
    
                return false
            }
            
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
            if(!boardArray[i].contains(undefined)){
                return true
            }
        }
        return false
    }

    return{
        checkWin,
        checkTie
    }

})()


const player = (playerSign) =>{

    let score = 0;
    let mark = this.playerSign

    const choosePoint = () =>{

    }

}

console.log(gameState.checkWin())
