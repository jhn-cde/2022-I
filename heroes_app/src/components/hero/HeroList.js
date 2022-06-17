import { getHeroByPublisher } from '../../selector/getHeroByPoblisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  const heroes = getHeroByPublisher(publisher)
  
  return (
    <>
      {
        <div className='row rows-cols-1 row-cols-md-3 g-3' style={{width:'100%'}}>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      }
    </>
  )
}