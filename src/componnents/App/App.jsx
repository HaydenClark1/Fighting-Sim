import StartScreen from "../StartScreen/StartScreen";
import CharacterSelector from "../CharacterSelector/CharacterSelector";
import Arena from "../Arena/Arena";
import PlayerWin from "../PlayerWin/PlayerWin";
import PlayerLose from "../PlayerLose/PlayerLose";
import "./App.css";
import { useState } from "react";
function App (){
    const[status, setStatus] = useState('start');
    const[character, setCharacterModel] = useState();
    const [playerName, setPlayerName] = useState("");
    const setCharacter = (characterID) =>{
        setCharacterModel(characterID);
        setStatus('fight');
    }
    const setGameStatus = (gameStatus) =>{
        setStatus(gameStatus)
    }
    return(
        <>
       {status === 'start' && <StartScreen startGame={() => setStatus('select')}/>}
       {status === 'select' && <CharacterSelector setSelectedCharacter={setCharacter} playerName={(name)=> setPlayerName(name)}/>}
       {status === 'fight' && <Arena character={character} status={setGameStatus} playerName={playerName}/>}
       {status === 'win' && <PlayerWin/>}
       {status === 'lose' && <PlayerLose/>}
        </>
    )
}
export default App;