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

export interface LearnModule {
  id: number;
  title: string;
  description: string;
  languageTerm: string;
  languageDefinition: string;
  words: Word[];
  isFavorite: boolean;
}

export interface GameMode {
  name: string;
  description: string;
  path: string;
  img: ReactElement;
}
