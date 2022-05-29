import React, { useState } from "react";
import InputField from "../../../shared/inputField";
import Button from "../../../shared/button";
import style from "./assignment.module.css";
import { data } from "./data";

const Assignment=()=> {
  const [text, setText] = useState("");
  const [leftBox, setLeftBox] = useState([]);
  const [box, setBox] = useState(data);
  const handleSubmit = () => {
    const newBox = box.filter(({ id }) => id === text);
    if (newBox.length !== 0) {
      setLeftBox([...leftBox, newBox[0]]);
      setBox(box.filter(({ id }) => id !== text));
    }
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.assignmentContainer}>
        <h1 className={style.header}>Assignment</h1>
        <div className={style.assignmentContent}>
          <div className={style.assignmentContentLeft}>
            {leftBox.length > 0 &&
              leftBox.map(({ id, color }, index) => (
                <div
                  className={style.assignmentContentMiddleBox}
                  style={{
                    backgroundColor: color,
                    cursor: "pointer",
                  }}
                  key={index}
                  onClick={() => {
                    setBox(
                      [...box, leftBox[index]].sort((a, b) => a.id - b.id)
                    );
                    setLeftBox(
                      leftBox.filter(({ id }, i) => id !== leftBox[index].id)
                    );
                  }}
                >{id}</div>
              ))}
          </div>
          <div className={style.assignmentContentMiddle}>
            {box.length > 0 &&
              box.map(({ id, color }, index) => (
                <div
                  className={style.assignmentContentMiddleBox}
                  style={{
                    backgroundColor: color,
                  }}
                  key={index}
                >{id}</div>
              ))}
          </div>
          <div className={style.assignmentContentRight}>
            <InputField onChange={(e) => setText(e.target.value)} placeholder="Enter number" />
            <Button children={"Submit"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
