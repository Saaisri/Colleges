import React from "react";

function DateItem({ name, course,startLine, deadLine }) {
  return (
    <div className="dateItem">
      <h2> {name} </h2>
      <p><b>Course: </b>{course}</p>
      <p><b>StartLine:</b>{startLine}</p>
      <p> <b>DeadLine: </b>{deadLine} </p>
    </div>
  );
}

export default DateItem;
