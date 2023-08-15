import React from "react";
import { DeadlineList } from "../helpers/DeadlineList";
import DateItem from "../components/DateItem";
import "../styles/Date.css";

function DeadLines() {
  return (
    <div className="date">
        <h1 className="dateTime">DeadLines for Universites</h1>
        {/* <div className="datelist">
            {DeadlineList.map((dateItem,key)=>{
            return(
                <DateItem
                    key={key}
                    name={dateItem.name}
                    course={dateItem.course}
                    deadline={dateItem.deadLine}
                    />
            );
            })}
        </div> */}
        <div className="datelist">
            <table>
                <tr>
                    <th>College Name</th>
                    <th>Course</th>
                    <th>DeadLine</th>
                </tr>
                {DeadlineList.map((dateItem, key) => {
                    return (
                        <tr key={key}>  
                        
                            <td>{dateItem.name}</td>
                            <td>{dateItem.course}</td>
                            <td>{dateItem.deadLine}</td>
                            
                        </tr>
                    )
                })}
            </table>
        </div>


    </div>
  )
}



export default DeadLines;