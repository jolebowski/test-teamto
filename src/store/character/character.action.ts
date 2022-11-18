import { createAction } from "../../utils/reducer/reducer.utils";

import { CHARACTER_ACTION_TYPES, Character } from "./character.types";

export const setCharacter = (characterArray: Character[]) =>
  createAction(CHARACTER_ACTION_TYPES.SET_CHARACTER, characterArray);
