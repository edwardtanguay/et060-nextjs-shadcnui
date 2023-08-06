"use client"
import { EventCalendar } from "@/components/event-calendar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="mb-4 text-2xl">Event Manager</h1>
        <EventCalendar />
      </div>
    </main>
  )
}
