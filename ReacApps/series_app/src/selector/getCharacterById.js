import { bb_and_bcs as characters } from '../data/bb_and_bcs'

export const getCharacterById = (id = '') => {
  return characters.find(character => character.char_id === parseInt(id))
}
