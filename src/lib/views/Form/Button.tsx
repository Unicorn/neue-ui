import React, { FC, ReactNode, ReactType, SyntheticEvent } from 'react';

import { UISizeOptions, UIColorOptions } from '../../types/ui';
import { bgColorClass } from '../../helpers/classHelper';

export interface ButtonProps {
	Element?: ReactType;
	color?: {
		hue?: UIColorOptions;
		weight?: UISizeOptions;
	};
	type?: 'button' | 'link';
	size?: UISizeOptions;
	external?: boolean;
	children?: ReactNode;
	className?: string;
	href?: string;
	value?: string;
	onClick?: (e: SyntheticEvent<HTMLFormElement | HTMLAnchorElement | HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ Element, className, type, color, size, external, children, ...props }) => {
	const classes = [type, `button-${size}`, className, bgColorClass(color)];

	return (
		<Element className={classes.join(' ')} rel={external ? 'external' : ''} target={external ? '_blank' : ''} {...props}>
			{children}
		</Element>
	);
};

Button.defaultProps = {
	Element: 'button',
	size: '500',
	type: 'button'
};

export default Button;
