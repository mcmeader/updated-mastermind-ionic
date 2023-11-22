import { Difficulties } from 'src/app/enums';

export const CONSTANTS = {
  HEADER: ['Difficulty'],
  DIFFICULTIES: [
    { difficulty: Difficulties.easy, display: 1 },
    { difficulty: Difficulties.normal, display: 2 },
    { difficulty: Difficulties.hard, display: 3 },
    { difficulty: Difficulties.nightmare, display: 4 },
    { difficulty: Difficulties.impossible, display: 5 },
  ],
};
