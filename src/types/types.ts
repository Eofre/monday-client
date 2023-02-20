import { ReactElement } from "react";

export interface NavItem {
  path: string;
  name: string;
}

export interface Word {
  term: string;
  definition: string;
  transcription: string;
}

export interface EducationalBlock {
  id: number;
  title: string;
  description: string;
  words: Word[];
}

export interface GameMode {
  name: string;
  description: string;
  path: string;
  img: ReactElement;
}

export interface UserAnswer {
  word: Word;
  answer: string;
  isRight: boolean;
}

// store

export interface EducationalBlockState {
  educationalBlocks: EducationalBlock[];
  loading: boolean;
  error: null | string;
}

export enum EducationalBlocksActionTypes {
  FETCH_EDUCATIONAL_BLOCKS = "FETCH_EDUCATIONAL-BLOCKS",
  FETCH_EDUCATIONAL_BLOCKS_SUCCESS = "FETCH_EDUCATIONAL-BLOCKS_SUCCESS",
  FETCH_EDUCATIONAL_BLOCKS_ERROR = "FETCH_EDUCATIONAL-BLOCKS_ERROR",
}

interface FetchEducationalBlocksAction {
  type: EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS;
}

interface FetchEducationalBlocksSuccessAction {
  type: EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS_SUCCESS;
  payload: EducationalBlock[];
}

interface FetchEducationalBlocksErrorAction {
  type: EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS_ERROR;
  payload: string;
}

export type EducationalBlockAction =
  | FetchEducationalBlocksAction
  | FetchEducationalBlocksSuccessAction
  | FetchEducationalBlocksErrorAction;
