import { WINNER_COMBOS } from "../components/constants"

export const checkWinner = (boardToCheck) => {

    // revisar todas las combinaciones ganadoras para ver si ya hay ganador 
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

export  const checkEndGame = (newBoard) =>{
    return newBoard.every((square)=> square !== null)
}