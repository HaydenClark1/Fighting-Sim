import { useEffect, useState } from "react";
import enemy from "../CharacterSelector/Characters/Character1.png"
import platform from '../Arena/images/battle-platform.png';
import banner from '../Arena/images/banner.png';
import healthBarImage from './images/health-bar.png';
import healthStatusImage from './images/health-status.png';
import './Enemy.css'
function Enemy ({canAttack, EnemyAttack, enemyAttackMessage, health}){
    const [attackNumber, setAttackNumber] = useState(0);
    const [healthBar, setHealthBar] = useState(100);
    const [healthMove, setHealthMove] = useState(5);
    const [shake, setShake] = useState(false);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            if(!canAttack){
                setAttackNumber(Math.floor(Math.random() * 4));
                if(attackNumber <= 2){
                    let attackStrength = -1* (Math.floor(Math.random() * 14) + 2);
                    EnemyAttack(attackStrength);
                    handleEnemyAttackMessage(attackNumber);
                }else{
                    if(healthBar === 100){
                        EnemyAttack(0);
                        enemyAttackMessage("Enemy attempted to heal but was unsuccessfull")
                    }else if(healthBar < 100 && healthBar > 90){
                        if(healthMove <= 0){
                            EnemyAttack(0);
                            enemyAttackMessage("Enemy attempted to heal but was unsuccessfull")
                        }
                        EnemyAttack(100-healthBar);
                        handleEnemyAttackMessage(attackNumber);
                        setHealthMove((prev)=>prev-1);
                    }
                    else{
                        handleEnemyAttackMessage(attackNumber);
                        setHealthMove((prev)=>prev-1);
                        EnemyAttack(10);
                    }
                }
            }
        },2000)

        return() =>{
            clearInterval(intervalID);
        }
        
    },[canAttack]);

    useEffect(()=>{
        if(health < healthBar){
        setShake(true);
        setTimeout(() => setShake(false), 500);
        }
        setHealthBar(health);
        
    },[health])


    const handleEnemyAttackMessage = (attackNumber) => {
        switch(attackNumber){
            case(0):
            enemyAttackMessage("Enemy Used Kick");
            break;
            case(1):
            enemyAttackMessage("Enemy Used Punch");
            break;
            case(2):
            enemyAttackMessage("Enemy Used Shoot");
            break;
            case(3):
            enemyAttackMessage("Enemy Used Heal");
            break;
        }
      };
    
    return(
        <>
            <div className="enemy-container">
             <img className={`enemy-picture ${shake ? "shake" :""}`} src={enemy} alt="enemy" />
            <img className= "enemy-platform"src={platform} alt="enemy-platform" />
            <img className="enemy-banner" src={banner} alt="enemy-banner" />
            </div>
            <div className="villian-stats">
               <h1 className="enemy-name">Enemy</h1>
               <h2 className="enemy-level">Lv. 50</h2>
               <img className="health-bar-image" src={healthBarImage} alt="health-bar" />
               <img className="health-status-image" style={{
                position: 'absolute',
                height: '15%',
                bottom: '27.5%',
                left: '40%',
                zIndex: '5',
                width: `${healthBar/1.76}%`,
               }} src={healthStatusImage} alt="health-status-image" />
            </div>
        </>
    )
}
export default Enemy;