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

    const expr = activityData.month;
    switch (expr) {
      case 0:
        setChartInfo({
          ...chartInfo,
          january: chartInfo.january + parseInt(enteredTime),
        });
        break;

      case 1:
        setChartInfo({
          ...chartInfo,
          february: chartInfo.february + parseInt(enteredTime),
        });
        break;

      case 2:
        setChartInfo({
          ...chartInfo,
          march: chartInfo.march + parseInt(enteredTime),
        });
        break;

      case 3:
        setChartInfo({
          ...chartInfo,
          april: chartInfo.april + parseInt(enteredTime),
        });
        break;

      case 4:
        setChartInfo({
          ...chartInfo,
          may: chartInfo.may + parseInt(enteredTime),
        });
        break;

      case 5:
        setChartInfo({
          ...chartInfo,
          june: chartInfo.june + parseInt(enteredTime),
        });
        break;

      case 6:
        setChartInfo({
          ...chartInfo,
          july: chartInfo.july + parseInt(enteredTime),
        });
        break;

      case 7:
        setChartInfo({
          ...chartInfo,
          august: chartInfo.august + parseInt(enteredTime),
        });
        break;

      case 8:
        setChartInfo({
          ...chartInfo,
          september: chartInfo.september + parseInt(enteredTime),
        });
        break;

      case 9:
        setChartInfo({
          ...chartInfo,
          october: chartInfo.october + parseInt(enteredTime),
        });
        break;

      case 10:
        setChartInfo({
          ...chartInfo,
          november: chartInfo.november + parseInt(enteredTime),
        });
        break;

      case 11:
        setChartInfo({
          ...chartInfo,
          december: chartInfo.december + parseInt(enteredTime),
        });
        break;

      default:
        console.log("Error, no valid data");
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
