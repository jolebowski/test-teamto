import { AnyAction } from "redux";

import { Character } from "./character.types";

import { CHARACTER_ACTION_TYPES } from "./character.types";

export type CharacterState = {
  readonly character: Character[];
};

export const CHARACTER_INITIAL_STATE: CharacterState = {
  character: [],
};

export const characterReducer = (
  state = CHARACTER_INITIAL_STATE,
  action = {} as AnyAction
): CharacterState => {
  const { type, payload } = action;

  switch (type) {
    case CHARACTER_ACTION_TYPES.SET_CHARACTER:
      return { ...state, character: payload };
    default:
      return state;
  }
};
