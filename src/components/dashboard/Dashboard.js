import React, { useContext, useEffect, useState } from "react";
import ActivityChart from "./Chart/ActivityChart";
import DisplayContext from "../../DisplayContext";
import Activities from "./History/Activities";
import ActivityNew from "./Add/ActivityNew";
import CurrentDate from "./Date/CurrentDate";
import "./Dashboard.css";
import IMAGE1 from "../../images/desktop-img.png";

const Dashboard = () => {
  const {
    displayChart,
    displayForm,
    displayHistory,
    activities,
    setActivities,
    chartInfo,
  } = useContext(DisplayContext);

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

  const addActivityHandler = (activity) => {
    setActivities((prevActivity) => {
      return [activity, ...prevActivity];
    });
  };

  const [chartData, setChartData] = useState({
    labels: months.map((a) => a.day),
    datasets: [
      {
        label: "Minutes",
        data: "",
        backgroundColor: [
          "#2F4858",
          "#564D70",
          "#676788",
          "#774D75",
          "#A243AE",
          "#C3006C",
          "#BB637E",
          "#ECA4CF",
          "#FFA992",
          "#FF9D47",
          "#FFBA65",
          "#FFCB51",
        ],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: months.map((a) => a.day),
      datasets: [
        {
          label: "Minutes",
          data: [
            chartInfo.january,
            chartInfo.february,
            chartInfo.march,
            chartInfo.april,
            chartInfo.may,
            chartInfo.june,
            chartInfo.july,
            chartInfo.august,
            chartInfo.september,
            chartInfo.october,
            chartInfo.november,
            chartInfo.december,
          ],
          backgroundColor: [
            "#2F4858",
            "#564D70",
            "#676788",
            "#774D75",
            "#A243AE",
            "#C3006C",
            "#BB637E",
            "#ECA4CF",
            "#FFA992",
            "#FF9D47",
            "#FFBA65",
            "#FFCB51",
          ],
        },
      ],
    });
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
