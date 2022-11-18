import { CharacterState } from "../character/character.reducer";

export const selectCharacter = (state: any): CharacterState => state.character;
