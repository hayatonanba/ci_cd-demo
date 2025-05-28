import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

type T = typeof Button;

export default {
	title: 'atoms/Button',
	component: Button,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	args: {
		label: 'Default Button',
		disabled: false,
	},
};

export const Primary: StoryObj<T> = {
	args: {
		label: 'Primary Button',
		disabled: false,
	},
};

export const Disabled: StoryObj<T> = {
	args: {
		label: 'Disabled Button',
		disabled: true,
	},
};
