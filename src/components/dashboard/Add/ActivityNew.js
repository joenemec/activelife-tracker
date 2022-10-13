import React, { useContext } from "react";
import DisplayContext from "../../../DisplayContext";
import ActivityForm from "./ActivityForm";
import "./ActivityNew.css";

const ActivityNew = (props) => {
  const { displayForm } = useContext(DisplayContext);

  const addActivityDataHandler = (enteredActivityData) => {
    const activityData = {
      ...enteredActivityData,
      id: Math.random().toString(),
    };
    props.onAddActivity(activityData);
  };

  return (
    <>
      {displayForm ? (
        <section className="new-activity">
          <ActivityForm onAddActivityData={addActivityDataHandler} />
        </section>
      ) : null}
    </>
  );
};

export default ActivityNew;
