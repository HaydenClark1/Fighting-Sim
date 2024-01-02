import char from '../CharacterSelector/Characters/Character1.png';
import char2 from '../CharacterSelector/Characters/Character2.png';
import char3 from '../CharacterSelector/Characters/Character3.png';
import char4 from '../CharacterSelector/Characters/Character4.png';
import char5 from '../CharacterSelector/Characters/Character5.png';
import char6 from '../CharacterSelector/Characters/Character6.png';
import '../CharacterSelector/CharacterSelector.css';
function CharacterSelector({setSelectedCharacter, playerName}){

//ALL CHAR MUST BE 20 X 50
    return(
        <>
        <div className="character-container">
            <h1 className="select-character">Select Character</h1>
            <div className="character-option-container">
                <div className="character1-container" onClick={()=>{setSelectedCharacter(char); playerName("Randy")}}>
                <img className= "character1"src={char} alt="Character1" />
                <p className='character-name1'>Randy</p>
                </div>
                <div className="character2-container" onClick={()=>{setSelectedCharacter(char2); playerName("Jesse")}}>
                <img className= "character2"src={char2} alt="Character2" />
                <p className='character-name2'>Jesse</p>
                </div>
                <div  className="character3-container" onClick={()=>{setSelectedCharacter(char3); playerName("Becky")}}>
                <img className= "character3"src={char3} alt="Character3" />
                <p className='character-name3'>Becky</p>
                </div>
                <div className="character4-container" onClick={()=>{setSelectedCharacter((char4)); playerName("Eli")}}>
                <img className= "character4"src={char4} alt="Character4" />
                <p className='character-name4'>Eli</p>
                </div>
                <div className="character5-container" onClick={()=>{setSelectedCharacter((char5)); playerName("Caden")}}>
                <img className= "character5"src={char5} alt="Character5" />
                <p className='character-name5'>Caden</p>
                </div>
                <div  className="character6-container" onClick={()=>{setSelectedCharacter((char6)); playerName("Dylan")}}>
                <img className= "character6"src={char6} alt="Character6" />
                <p className='character-name6'>Dylan</p>
                </div>
        </div>
        </div>
        </>
    )
}
export default CharacterSelector;
