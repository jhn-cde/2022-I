import { bb_and_bcs as characters } from '../data/bb_and_bcs'

export const getCharacterByCategory = (category) => {
  const categories = category.split(',')
  const validPublisher = ['Breaking Bad', 'Better Call Saul']

  for (const cat of categories) {
    if (!validPublisher.includes(cat.trim())) {
      throw new Error(`Categoria: ${cat} no soportada`)
    }
  }

  return characters.filter(character => character.category.split(', ').includes(categories[0]))
}
