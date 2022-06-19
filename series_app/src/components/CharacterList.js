import { getCharacterByCategory } from "../selector/getCharacterByCategory"
import { CharacterCardOverlay } from './CharacterCardOverlay'

export const CharacterList = ({ category }) => {
  const characters = getCharacterByCategory(category)
  
  return (
    <>
    {
      <div className='row animate__animated animate__fadeIn' style={{width:'100%'}}>
        {
          characters.map(character => (
            <CharacterCardOverlay key={character.char_id} {...character}/>
          ))
        }
      </div>
    }
    </>
  )
}