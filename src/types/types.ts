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

export interface IEducationalBlock {
  id: number;
  name: string;
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
