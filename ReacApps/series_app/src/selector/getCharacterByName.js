import { bb_and_bcs as characters } from '../data/bb_and_bcs'

export const getCharacterByName = (name = '') => {
  if(name === '')
    return []
  else{
    return characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
  }
}