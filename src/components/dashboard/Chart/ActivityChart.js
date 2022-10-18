import React, { useContext } from "react";
import DisplayContext from "../../../DisplayContext";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./ActivityChart.css";

const ActivityChart = ({ chartItems }) => {
  const { displayChart } = useContext(DisplayContext);
  // console.log(chartItems.datasets[0].data);
  return <>{displayChart ? <Doughnut data={chartItems} /> : null}</>;
};

export default ActivityChart;
