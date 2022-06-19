import { CharacterList } from "../components/CharacterList"

export const BbScreen = () => {
  return (
    <>
      <h1>Breaking Bad</h1>
      <hr/>
      <CharacterList category={ "Breaking Bad" }/>
    </>
  )
}