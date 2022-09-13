import { ButtonHTMLAttributes } from 'react';

type ImportantType = 'primary' | 'secondary'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	important: ImportantType;
}
