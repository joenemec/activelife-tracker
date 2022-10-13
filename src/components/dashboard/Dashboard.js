import React, { useContext, useState } from "react";
import ActivityChart from "./Chart/ActivityChart";
import DisplayContext from "../../DisplayContext";
import ActivityTotal from "./Total/ActivityTotal";
import Activities from "./History/Activities";
import ActivityNew from "./Add/ActivityNew";
import CurrentDate from "./Date/CurrentDate";
import "./Dashboard.css";

const Dashboard = () => {
  const {
    displayChart,
    displayForm,
    displayHistory,
    activities,
    setActivities,
  } = useContext(DisplayContext);

  const addActivityHandler = (activity) => {
    setActivities((prevActivity) => {
      return [activity, ...prevActivity];
    });
  };

  const weekDays = [
    { day: "Sun", num: 0 },
    { day: "Mon", num: 1 },
    { day: "Tue", num: 2 },
    { day: "Wed", num: 3 },
    { day: "Thu", num: 4 },
    { day: "Fri", num: 5 },
    { day: "Sat", num: 6 },
  ];

  const months = [
    { day: "Jan", num: 0 },
    { day: "Feb", num: 1 },
    { day: "Mar", num: 2 },
    { day: "Apr", num: 3 },
    { day: "May", num: 4 },
    { day: "Jun", num: 5 },
    { day: "Jul", num: 6 },
    { day: "Aug", num: 7 },
    { day: "Sep", num: 8 },
    { day: "Oct", num: 9 },
    { day: "Nov", num: 10 },
    { day: "Dec", num: 11 },
  ];

  const [chartData, setChartData] = useState({
    labels: weekDays.map((a) => a.day),
    datasets: [
      {
        label: "Minutes",
        data: activities.map((activity) => activity.time),
      },
    ],
  });

  console.log(activities);
  // console.log(chartData);

  return (
    <main className="dashboard">
      <CurrentDate />
      <ActivityChart displayComponent={displayChart} chartItems={chartData} />
      <ActivityNew
        displayComponent={displayForm}
        onAddActivity={addActivityHandler}
      />
      <Activities displayComponent={displayHistory} items={activities} />
      {/* <ActivityTotal displayComponent={displayTotal} items={activities} /> */}
    </main>
  );
};

export default Dashboard;
