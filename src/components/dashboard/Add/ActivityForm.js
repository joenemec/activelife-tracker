import React, { useState } from "react";
import ActivitySubmit from "./ActivitySubmit";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [enteredActivity, setEnteredActivity] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const activityChangeHandler = (e) => {
    setEnteredActivity(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setEnteredTime(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const activityData = {
      type: enteredActivity,
      time: +enteredTime,
      date: new Date(enteredDate + "T00:00:00"),
      day: new Date(enteredDate + "T00:00:00").getDay(),
      month: new Date(enteredDate + "T00:00:00").getMonth(),
    };

    props.onAddActivityData(activityData);

    setEnteredActivity("");
    setEnteredTime("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-activity__controls">
        <div className="new-activity__control">
          <label>Activity</label>
          <input
            type="text"
            value={enteredActivity}
            onChange={activityChangeHandler}
            required
          />
        </div>
        <div className="new-activity__control">
          <label>Time (minutes)</label>
          <input
            type="number"
            value={enteredTime}
            min="1"
            step="1"
            onChange={timeChangeHandler}
            required
          />
        </div>
        <div className="new-activity__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
        <ActivitySubmit />
      </div>
    </form>
  );
};

export default ActivityForm;
