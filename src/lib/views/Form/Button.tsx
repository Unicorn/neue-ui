import React, { FC, ReactNode, SyntheticEvent, ElementType, ComponentType } from 'react';

import { UISizeOptions, UIColorOptions } from '../../types/ui';
import { bgColorClass } from '../../helpers/classHelper';

export interface ButtonComponentProps {
	className?: string;
	children?: ReactNode;
	href?: string;
	value?: string;
	rel?: string
	target?: string
	onClick?: (e: SyntheticEvent<HTMLFormElement | HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface ButtonProps extends ButtonComponentProps {
	component?: ElementType;
	color?: {
		hue?: UIColorOptions;
		weight?: UISizeOptions;
	};
	type?: 'button' | 'link';
	size?: UISizeOptions;
	external?: boolean;
}



const Button: FC<ButtonProps> = ({ component, className, type, color, size, external, children, ...props }) => {
	const classes = [type, `button-${size}`, className, bgColorClass(color)];
	const Component = component as ComponentType<ButtonComponentProps>

	return (
		<Component className={classes.join(' ')} rel={external ? 'external' : ''} target={external ? '_blank' : ''} {...props}>
			{children}
		</Component>
	);
};

Button.defaultProps = {
	component: 'button',
	size: '500',
	type: 'button'
};

export default Button;
