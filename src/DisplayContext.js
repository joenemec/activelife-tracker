import React, { createContext, useState } from "react";

const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [displayChart, setDisplayChart] = useState(true);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayHistory, setDisplayHistory] = useState(false);

  const addDisplayChart = () => {
    setDisplayChart(true);
    setDisplayForm(false);
    setDisplayHistory(false);
  };
  const addDisplayForm = () => {
    setDisplayForm(true);
    setDisplayChart(false);
    setDisplayHistory(false);
  };
  const addDisplayHistory = () => {
    setDisplayHistory(true);
    setDisplayChart(false);
    setDisplayForm(false);
  };

  const allActivities = [
    {
      id: "a1",
      type: "Jog",
      time: 20,
      date: new Date(2022, 9, 3),
      month: new Date(2022, 9, 3).getMonth(),
    },
    {
      id: "a2",
      type: "Swim",
      time: 45,
      date: new Date(2022, 8, 14),
      month: new Date(2022, 8, 14).getMonth(),
    },
    {
      id: "a3",
      type: "Cycle",
      time: 35,
      date: new Date(2022, 7, 23),
      month: new Date(2022, 7, 23).getMonth(),
    },
  ];

  const previewTime = {
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 35,
    september: 45,
    october: 20,
    november: 0,
    december: 0,
  };

  const [activities, setActivities] = useState(allActivities);
  const [chartInfo, setChartInfo] = useState(previewTime);

  return (
    <DisplayContext.Provider
      value={{
        displayChart,
        addDisplayChart,
        displayForm,
        addDisplayForm,
        displayHistory,
        addDisplayHistory,
        activities,
        setActivities,
        chartInfo,
        setChartInfo,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
export default DisplayContext;
