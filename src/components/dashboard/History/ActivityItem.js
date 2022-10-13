import React from "react";
import ActivityDate from "./ActivityDate";
import "./ActivityItem.css";

const ActivityItem = (props) => {
  return (
    <section className="activity-item">
      <div className="activity-item__card">
        <ActivityDate date={props.date} />
        <div className="activity-item__description">
          <h4>{props.type}</h4>
          <div className="activity-item__time">{props.time} min.</div>
        </div>
      </div>
    </section>
  );
};

export default ActivityItem;
