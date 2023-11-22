import { AnswerPegColor } from '../enums';

export type AnswerColors = {
  [AnswerPegColor.empty]: string;
  [AnswerPegColor.black]: string;
  [AnswerPegColor.white]: string;
};

export const StandardAnswerColors: AnswerColors = {
  [AnswerPegColor.empty]: '',
  [AnswerPegColor.black]: 'black',
  [AnswerPegColor.white]: 'white',
};
