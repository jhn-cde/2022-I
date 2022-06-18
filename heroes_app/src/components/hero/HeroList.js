import { getHeroByPublisher } from '../../selector/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  const heroes = getHeroByPublisher(publisher)
  
  return (
    <>
      {
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn' style={{width:'100%'}}>
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