"use clients"
import { Button } from './ui/button';

interface IProps {
	buttonText: string;
}

export function ConfirmEventButton({ buttonText }: IProps) {
	return (
		<Button onClick={() => console.log('button clicked')}>{buttonText}</Button>
	)
}