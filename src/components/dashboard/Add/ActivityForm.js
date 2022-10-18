import React, { useState, useContext } from "react";
import DisplayContext from "../../../DisplayContext";

import ActivitySubmit from "./ActivitySubmit";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const { chartInfo, setChartInfo } = useContext(DisplayContext);
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

    const expr = activityData.day;
    switch (expr) {
      case 1:
        setChartInfo({ ...chartInfo, monday: chartInfo.monday + parseInt(enteredTime) });
        break;

      case 2:
        setChartInfo({ ...chartInfo, tuesday: chartInfo.tuesday + parseInt(enteredTime) });
        break;

      case 3:
        setChartInfo({ ...chartInfo, wednesday: chartInfo.wednesday + parseInt(enteredTime) });
        break;

      case 4:
        setChartInfo({ ...chartInfo, thursday: chartInfo.thursday + parseInt(enteredTime) });
        break;

      case 5:
        setChartInfo({ ...chartInfo, friday: chartInfo.friday + parseInt(enteredTime) });
        break;

      case 6:
        setChartInfo({ ...chartInfo, saturday: chartInfo.saturday + parseInt(enteredTime) });
        break;

      case 0:
        setChartInfo({ ...chartInfo, sunday: chartInfo.sunday + parseInt(enteredTime) });
        break;

      default:
        console.log('Error, no valid data');
    }
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
