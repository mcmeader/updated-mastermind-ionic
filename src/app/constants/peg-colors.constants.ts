import { PegColors } from '../enums/peg-color.enum';

export type GameColors = {
  [PegColors.empty]: string;
  [PegColors.red]: string;
  [PegColors.yellow]: string;
  [PegColors.blue]: string;
  [PegColors.green]: string;
  [PegColors.black]: string;
  [PegColors.white]: string;
  [PegColors.purple]: string;
  [PegColors.orange]: string;
  [PegColors.darkslategrey]: string;
  [PegColors.brown]: string;
  [PegColors.gold]: string;
  [PegColors.silver]: string;
};

export const StandardColors: GameColors = {
  [PegColors.empty]: '',
  [PegColors.red]: 'red',
  [PegColors.yellow]: 'yellow',
  [PegColors.blue]: 'blue',
  [PegColors.green]: 'green',
  [PegColors.black]: 'black',
  [PegColors.white]: 'white',
  [PegColors.purple]: 'purple',
  [PegColors.orange]: 'orange',
  [PegColors.darkslategrey]: 'darkslategrey',
  [PegColors.brown]: 'brown',
  [PegColors.gold]: 'gold',
  [PegColors.silver]: 'silver',
};
