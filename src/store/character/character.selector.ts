import { CharacterState } from "../character/character.reducer";
import { rootReducer } from "../root-reducer";

type RootState = ReturnType<typeof rootReducer>;

export const selectCharacter = (state: RootState): CharacterState =>
  state.character;
