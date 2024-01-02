import Player from "../Player/Player";
import { useState, useEffect } from "react";
import platform from './images/battle-platform.png';
import Enemy from "../Enemy/Enemy";
import "./Arena.css";
import banner from './images/banner.png';


function Arena({character, status, playerName}){

const [playerHealth, setPlayerHealth] = useState(100);
const [villianHealth, setVillianHealth] = useState(100);
const[canAttack,setCanAttack] = useState(true);
const[attackMessage, setAttackMessage] = useState("");

const handlePlayerAttack = (attack) =>{
    if(attack < 0 && attack != 1){
        setVillianHealth((prevHealth) => {
        const newHealth = prevHealth + attack;
        checkEnemyHealth(newHealth);
        setCanAttack(false);
        return newHealth;
    });}else if(attack === 15){
        setVillianHealth((prevHealth) => {
            const newHealth = prevHealth - attack;
            checkEnemyHealth(newHealth);
            setCanAttack(true);
            return newHealth;
        })
       
    }else{
        setPlayerHealth((prevHealth)=>prevHealth + attack);
        setCanAttack(false);
    }
}

const handleEnemyAttack = (attack) =>{
    if(attack < 0){
        setPlayerHealth((prevHealth) => {
        const newHealth = prevHealth + attack;
        checkPlayerHealth(newHealth);
        return newHealth;
    });}else{
        console.log("Villian Healing")
        setVillianHealth((prevHealth)=> prevHealth + attack);
    }
    setCanAttack(true);
}
const checkPlayerHealth = (playerHealth) =>{
    if(playerHealth  <= 0){
        status('lose');
    }
}
const checkEnemyHealth = (villianHealth) =>{
    if(villianHealth  <= 0){
        status('win');
    }
}
    return(
        <>
 
        <div className="play-area">
         <Player className="player" character={character} 
                    setHealth={playerHealth} 
                    returnAttack={handlePlayerAttack} 
                    canAttack={canAttack}
                    attackMessage={(message)=>setAttackMessage(message)}
                    playerName={playerName}
                    health={playerHealth}/>
         <img className="player-platfrom" src={platform} alt="battle platfrom" />

         <div className="player-info">
            <img className="player-banner" src={banner} alt="player-banner" />
\         </div>
         </div>
         <div className="attack-message-container">
            <h1 className="attack-message">{attackMessage}</h1>
         </div>
            <Enemy health = {villianHealth} 
                canAttack={canAttack} 
                EnemyAttack={handleEnemyAttack} 
                enemyAttackMessage={(message)=>setAttackMessage(message)}/>
        </>
    )
}
export default Arena;