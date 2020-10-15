import React, { useState, useEffect } from "react";
import "./ProgressiveBar.css";

let steps = [{value: 1},{value:2}, {value: 3}, {value: 4}, {value: 5}, {value:6} ]

function ProgressiveBar() {
  const [step, setStep] = useState(
    localStorage.getItem("stepNumberSave") || ""
  );
  const [date, setDate] = useState([]);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    localStorage.setItem("stepNumberSave", step);
  }, [step]);

  const nextStep = (event) => {
    setStep(event.target.value);
    let newArr = [...date];
    newArr[event.target.value - 1] = Date(Date.now());
    setDate(newArr);
  };

  const mouseEnter = (event) => {
    setHover(event.target.value);
  };

  const mouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="progress">
      <ul>
        <li className={step >= 1 ? "complete" : ""} value={0}>
          <span>0</span>
        </li>
        {steps.map((e, i) => (
          <li
            className={step >= e.value + 1 ? "complete" : ""}
            value={e.value} // 1
            onClick={nextStep}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            key={i}
          >
            {date[i] && (
              <div className={hover === e.value ? "dateHover" : "invisible"}>
                <p>{date[i]}</p>
              </div>
            )}
            <span>1</span>
          </li>
        ))}
       
      </ul>
    </div>
  );
}

export default ProgressiveBar;
