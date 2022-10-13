import React, { useContext, useState } from "react";
import DisplayContext from "../../../DisplayContext";
import ActivityItem from "./ActivityItem";
import "./Activities.css";

const Activities = ({ items }) => {
  const { displayHistory } = useContext(DisplayContext);

  // console.log(activities.map((activity) => activity.time));
  // console.log(
  //   chartData.datasets.map((data) => console.log(data.data.push(activities)))
  // );

  return (
    <>
      {displayHistory ? (
        <section className="activities">
          {items.map((activity) => (
            <ActivityItem
              key={activity.id}
              type={activity.type}
              time={activity.time}
              date={activity.date}
              day={activity.day}
              month={activity.month}
            />
          ))}
        </section>
      ) : null}
    </>
  );
};

export default Activities;
