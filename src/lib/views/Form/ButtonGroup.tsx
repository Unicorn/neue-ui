import React, { FC, ReactNode } from 'react';

export interface ButtonGroupProps {
	children?: ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
	<div className="button-group">
		{children}
	</div>
);

export default ButtonGroup;
