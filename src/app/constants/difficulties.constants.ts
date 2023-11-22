import { Difficulties, PegColors } from '../enums';
import {
  EASYPEGCOLORS,
  HARDPEGCOLORS,
  IMPOSSIBLEPEGCOLORS,
  NIGHTMAREPEGCOLORS,
  NORMALPEGCOLORS,
} from './difficulty-colors.constants';

export type ChallengeInfo = {
  numberOfPegs: number;
  colors: PegColors[];
  maxGuesses: number;
};

export const CHALLENGE: Record<Difficulties, ChallengeInfo> = {
  [Difficulties.easy]: {
    numberOfPegs: 3,
    colors: EASYPEGCOLORS,
    maxGuesses: 0,
  },
  [Difficulties.normal]: {
    numberOfPegs: 4,
    colors: NORMALPEGCOLORS,
    maxGuesses: 10,
  },
  [Difficulties.hard]: {
    numberOfPegs: 5,
    colors: HARDPEGCOLORS,
    maxGuesses: 12,
  },
  [Difficulties.nightmare]: {
    numberOfPegs: 6,
    colors: NIGHTMAREPEGCOLORS,
    maxGuesses: 10,
  },
  [Difficulties.impossible]: {
    numberOfPegs: 8,
    colors: IMPOSSIBLEPEGCOLORS,
    maxGuesses: 8,
  },
};
