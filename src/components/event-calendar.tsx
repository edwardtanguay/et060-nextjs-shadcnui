"use client"
import { useState } from 'react';
import { Calendar } from "./ui/calendar";

export function EventCalendar() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-md border bg-slate-200"
		/>
	)
}