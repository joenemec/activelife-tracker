import React, { useContext } from "react";
import DisplayContext from "../../../DisplayContext";
import ActivityItem from "./ActivityItem";
import "./Activities.css";

const Activities = ({ items }) => {
  const { displayHistory } = useContext(DisplayContext);

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
              month={activity.month}
            />
          ))}
        </section>
      ) : null}
    </>
  );
};

export default Activities;
