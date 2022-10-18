import React, { useContext, useEffect, useState } from "react";
import ActivityChart from "./Chart/ActivityChart";
import DisplayContext from "../../DisplayContext";

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
    chartInfo,
  } = useContext(DisplayContext);

  const weekDays = [
    { day: "Mon", num: 0 },
    { day: "Tue", num: 1 },
    { day: "Wed", num: 2 },
    { day: "Thu", num: 3 },
    { day: "Fri", num: 4 },
    { day: "Sat", num: 5 },
    { day: "Sun", num: 6 },
  ];

  // const months = [
  //   { day: "Jan", num: 0 },
  //   { day: "Feb", num: 1 },
  //   { day: "Mar", num: 2 },
  //   { day: "Apr", num: 3 },
  //   { day: "May", num: 4 },
  //   { day: "Jun", num: 5 },
  //   { day: "Jul", num: 6 },
  //   { day: "Aug", num: 7 },
  //   { day: "Sep", num: 8 },
  //   { day: "Oct", num: 9 },
  //   { day: "Nov", num: 10 },
  //   { day: "Dec", num: 11 },
  // ];

  const [chartData, setChartData] = useState({
    labels: weekDays.map((a) => a.day),
    datasets: [
      {
        label: "Minutes",
        data: '',
      },
    ],
  });

  const addActivityHandler = (activity) => {
    setActivities((prevActivity) => {
      return [activity, ...prevActivity];
    });
  }

  useEffect(() => {
    setChartData({
      labels: weekDays.map((a) => a.day),
      datasets: [
        {
          label: "Minutes",
          data: [chartInfo.monday, chartInfo.tuesday, chartInfo.wednesday, chartInfo.thursday, chartInfo.friday, chartInfo.saturday, chartInfo.sunday],
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartInfo]);

  return (
    <main className="dashboard">
      <CurrentDate />
      <ActivityChart displayComponent={displayChart} chartItems={chartData} />
      <ActivityNew
        displayComponent={displayForm}
        onAddActivity={addActivityHandler}
      />
      <Activities displayComponent={displayHistory} items={activities} />
    </main>
  );
};

export default Dashboard;
