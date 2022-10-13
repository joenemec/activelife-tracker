import React, { useContext } from "react";
import DisplayContext from "../../../DisplayContext";
import "./ActivityTotal.css";

const ActivityTotal = ({ items }) => {
  const { displayTotal } = useContext(DisplayContext);

  let allTime = items.reduce((prev, curr) => {
    return prev + curr.time;
  }, 0);

  return (
    <>
      {displayTotal ? (
        <section className="activity-total">
          <div className="activity-total__heading">
            <h3>You completed</h3>
          </div>
          <div className="activity-total__border">
            <div className="activity-total__time">
              <span>{allTime}</span> minutes
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ActivityTotal;
