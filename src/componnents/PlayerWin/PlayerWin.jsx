import "./PlayerWin.css";
function PlayerWin({startGame}){

    return(
        <>
            <h1 className="win-message">You Win!!!</h1>
            <button className='play-again-button'
            onClick={startGame}>Play Again</button>
        </>
    )
}
export default PlayerWin;