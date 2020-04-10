export type UISizeOptions =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type UIColorOptions = 'neutral' | 'primary' | 'secondary';

export type UIColor = {
  hue?: UIColorOptions;
  weight?: UISizeOptions;
};
