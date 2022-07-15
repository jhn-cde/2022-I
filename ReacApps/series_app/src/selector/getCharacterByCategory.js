import { bb_and_bcs as characters } from '../data/bb_and_bcs'

export const getCharacterByCategory = (category) => {
  const validPublisher = ['Breaking Bad', 'Better Call Saul']

  if (!validPublisher.includes(category.trim())) {
    throw new Error(`Categoria: ${category} no soportada`)
  }

  return characters.filter(character => character.category.includes(category.trim()))
}
