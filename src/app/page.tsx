"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const padZeros = (num: number, digits = 2, pad = '0') => String(pad.repeat(digits) + num).slice(digits * -1);

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <main className="p-4">
      <h1 className="mb-4">Test Site</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border mb-4"
      />
      {date && (
        <div>{`${date.getFullYear()}-${padZeros(date.getMonth()+1)}-${padZeros(date.getDate())}`}</div>
      )}
      <Button className="bg-blue-900">Info</Button>

    </main>
  )
}
