import { useState } from "react";
import '../StartScreen/StartScreen.css'
function StartScreen({startGame}){
    const[selectScreen, showSelectScreen] = useState(false);
    return(
        <>
        <div className="start-container">
            <h1 className="start-prompt">Battle Sim</h1>
            <button className="start-button" onClick={startGame}>Start Game</button>
        </div>
        </>
    )
}
export default StartScreen;