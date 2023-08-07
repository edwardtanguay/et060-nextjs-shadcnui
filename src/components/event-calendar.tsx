"use client"
import { useState } from 'react';
import { Calendar } from "./ui/calendar";
import { Button } from './ui/button';

const padZeros = (num: number, digits = 2, pad = '0') => String(pad.repeat(digits) + num).slice(digits * -1);

export function EventCalendar() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [message, setMessage] = useState('');
	const [eventCreated, setEventCreated] = useState(false);

	const getFullDate = () => {
		if (date) {
			return `${date.getFullYear()}-${padZeros(date.getMonth() + 1)}-${padZeros(date.getDate())}`
		} else {
			return '';
		}
	}

	const handleCreateEvent = () => {
		setMessage(`Event for ${getFullDate()} was created.`);
		setEventCreated(true);
	}

	return (
		<>
			<Calendar
				mode="single"
				selected={date}
				disableNavigation={eventCreated}
				onSelect={setDate}
				disabled={eventCreated}
				className="rounded-md border bg-yellow-400"
			/>
			{!eventCreated ? (
				<>
					<div>{getFullDate()}</div>
					<Button onClick={() => handleCreateEvent()}>Create Event</Button>
				</>
			) : (
				<div className='text-green-800 font-bold'>{message}</div>
			)}
		</>
	)
}