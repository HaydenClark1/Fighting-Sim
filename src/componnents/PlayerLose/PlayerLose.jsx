import './PlayerLose.css';
function PlayerLose ({startGame}){

    return(
        <>
            <h1 className="loss-message">You Lose</h1>
            <button className='play-again-button'
            onClick={startGame}>Play Again</button>
        </>
    )
}
export default PlayerLose;