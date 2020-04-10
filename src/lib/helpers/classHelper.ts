import { UISizeOptions, UIColor } from '../types/ui';

export const bgColorClass = (color?: UIColor) => {
  const classes = ['bg'];

  if (color && (color.hue || color.weight)) {
    classes.push(color.hue ?? 'neutral');
    classes.push(`c${color.weight ?? '500'}`);
  }

  return classes.join(' ');
};

export const paddingClass = (size?: UISizeOptions) =>
  size ? `padding-${size}` : '';
export const radiusClass = (size?: UISizeOptions) =>
  size ? `radius-${size}` : '';
export const shadowClass = (size?: UISizeOptions) =>
  size ? `shadow-${size}` : '';
