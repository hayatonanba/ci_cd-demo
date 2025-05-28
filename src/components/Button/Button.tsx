import type React from 'react';

export type ButtonProps = {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
	return (
		<button
			type='button'
			className='rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50'
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
