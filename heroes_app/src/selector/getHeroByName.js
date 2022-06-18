import { heroes } from '../data/heroes'

export const getHeroByName = (name = '') => {
  if(name === '')
    return []
  else{
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()))
  }
}