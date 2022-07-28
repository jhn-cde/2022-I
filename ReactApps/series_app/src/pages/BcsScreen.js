import { CharacterList } from "../components/CharacterList"

export const BcsScreen = () => {
  return (
    <>
      <h1>Better Call Saul</h1>
      <hr/>
      <CharacterList category={ "Better Call Saul" }/>
    </>
  )
}