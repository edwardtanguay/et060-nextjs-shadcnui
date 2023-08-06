"use client"
import { useState } from 'react';
import { Calendar } from "./ui/calendar";
import { Button } from './ui/button';

export function EventCalendar() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	const getFullDate = () => {
		return 'nnn';
	}

	return (
		<>
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-md border bg-slate-200"
		/>
		<Button onClick={() => console.log('button clicked')}>Create Event</Button>
		<div>{getFullDate()}</div>
		</>
	)
}