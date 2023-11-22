import { PegColors } from '../enums';

export const EASYPEGCOLORS = [
  PegColors.red,
  PegColors.yellow,
  PegColors.blue,
  PegColors.green,
];

export const NORMALPEGCOLORS = [
  ...EASYPEGCOLORS,
  PegColors.black,
  PegColors.white,
];

export const HARDPEGCOLORS = [
  ...NORMALPEGCOLORS,
  PegColors.purple,
  PegColors.orange,
];

export const NIGHTMAREPEGCOLORS = [
  ...HARDPEGCOLORS,
  PegColors.darkslategrey,
  PegColors.brown,
];

export const IMPOSSIBLEPEGCOLORS = [
  ...NIGHTMAREPEGCOLORS,
  PegColors.gold,
  PegColors.silver,
];
