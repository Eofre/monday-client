import { combineReducers } from "redux";
import { educationalBlockReducer } from "./educationalBlockReducer";

export const rootReducer = combineReducers({
  educationalBlock: educationalBlockReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
