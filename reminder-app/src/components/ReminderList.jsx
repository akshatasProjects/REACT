import React from "react";
import Reminder from "./Reminder";

function ReminderList(props) {
  return (
    <div>
      <Reminder
        reminderText='Pick up wisely'
        dueDate='2364-01-15'
        isComplete={false}
      />
      <Reminder
        reminderText='Meet with Juan'
        dueDate='2364-01-29'
        isComplete={false}
      />
      <Reminder
        reminderText='Holdeck time'
        dueDate='2364-01-15'
        isComplete={false}
      />
    </div>
  );
}

export default ReminderList;
