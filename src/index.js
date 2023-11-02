//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours(2023, 11, 2, 13);
const customStyle = {
  color: ""
};
let greeting = "hello";

if (time < 12) {
  greeting = "morning"
  customStyle.color = "blue";
} else if (time < 18) {
  greeting = "evening"
  customStyle.color = "yellow";
} else {
  greeting = "afternoon"
  customStyle.color = "green";
}

ReactDOM.render(
  <div>
    <h1 className="one" style={customStyle}>
      good {greeting} it's {time} o'clock
    </h1>
    <ul>
      <li>list one</li>
      <li>list two </li>
      <li>last list</li>
    </ul>
  </div>,

  document.getElementById("root")
);
