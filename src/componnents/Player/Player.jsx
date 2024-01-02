import "../../componnents/Player/Player.css";
import { useState, useEffect } from "react";
import healthBarImage from './images/health-bar.png';
import healthStatusImage from './images/health-status.png';
function Player({character, returnAttack, canAttack, playerName, health, attackMessage}){
const[attacks,setAttacks] = useState([10,10,5,5]);
const [healthBar, setHealthBar] = useState(100);
const [shake, setShake] = useState(false);

const useAttack = (attackType) =>{
    switch(attackType){
        case('punch'):
        if(attacks[0] > 0){
            let attackStrength = -1 * (Math.floor(Math.random() * 14) + 2);
            returnAttack(attackStrength);
            attackMessage(playerName+ " Used Punch");
            setAttacks((prevAttacks) => [prevAttacks[0] - 1, ...prevAttacks.slice(1)]);
        }
            break;
        case('kick'):
            if(attacks[1] >0){
            let attackStrength = -1 * (Math.floor(Math.random() * 14) + 2);
            returnAttack(attackStrength);
            attackMessage(playerName + " Used Kick");
            setAttacks((prevAttacks) => [...prevAttacks.slice(0, 1), prevAttacks[1] - 1, ...prevAttacks.slice(2)]);
            }
            break;

        case('illusion'):
            if(attacks[2] >0){
            let successfull = Math.random();
            if(successfull >= 0.5){ //Attack successfull
                returnAttack(15); // 1 for illusion
                attackMessage( playerName + " Used illusion successfully and skippes Enemy's turn");
                setAttacks((prevAttacks) => [...prevAttacks.slice(0, 2), prevAttacks[2] - 1, ...prevAttacks.slice(3)]);
            }else{
                returnAttack(0);
                attackMessage( playerName + " Used illusion unsuccessfully");
                setAttacks((prevAttacks) => [...prevAttacks.slice(0, 2), prevAttacks[2] - 1, ...prevAttacks.slice(3)]);
            }
           
            }
            break;
        case('heal'):
          if(attacks[3] >0){
            returnAttack(10);
            attackMessage(playerName + " Used Heal");
            setAttacks((prevAttacks) => [...prevAttacks.slice(0, 3), prevAttacks[3] - 1, ...prevAttacks.slice(4)]);
          }
            break;
    }
}
    useEffect(()=>{
        if(canAttack && health !== 100){
        setShake(true);
        setTimeout(()=> setShake(false),500)
        }
        setHealthBar(health);

    },[canAttack, health])


    
       
    return(
        <>
        <div className= {`player-model-container ${shake ? "shake" : ""}`}>
            <img className = "player-model" style={{
            }} src={character} alt="player-character" />
        </div>
        <div className="attack-container">
            <div className="attack-buttons">
                <div className="attack-buttons-top">
                <button className="punch-button" disabled= {!canAttack || attacks[0] === 0} onClick={()=>useAttack('punch')}>Punch {attacks[0]}/10</button>
                <button className="kick-button" disabled= {!canAttack} onClick={()=>useAttack('kick')}>Kick {attacks[1]}/10</button>
                </div>
                <div className="attack-buttons-bottom">
                <button className="shoot-button" disabled= {!canAttack} onClick={()=>useAttack('illusion')}>illusion {attacks[2]}/5</button>
                <button className="heal-button"  disabled= {!canAttack || health > 90} onClick={()=>useAttack('heal')}>Heal {attacks[3]}/5</button>
                </div>
            </div>
           
        </div>
        <div className="player-health-container">
            <h1 className="player-name">{playerName}</h1>
            <h2 className="player-level">Lv. 50</h2>
            <img className= "player-health-bar"src={healthBarImage} alt="health-bar" />
            <img  className= "player-health-status"src={healthStatusImage} style={{
                 position: 'absolute',
                 height: '15%',
                 bottom: '35.5%',
                 left: '32.5%',
                 zIndex: '5',
                 width: `${healthBar/1.79}%`,
                
            }} alt="health-status" />
            <h3 className="player-health">{health}/100</h3>
        </div>
        <div className="border1"></div>
        <div className="border2"></div>
        </>
        )
}
export default Player;