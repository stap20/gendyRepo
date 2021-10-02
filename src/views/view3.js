import React from "react";
import ClassComb from "../components/classcomb1";
import FuncComb from "../components/funccomb2";
import Button from '@mui/material/Button';

export default function View3(props) {
  var nextPath = (path) => {
    props.history.push(path);
  };
  return (
    <div>
      <h3>page3</h3>
      <h2>sahla sahla yagendy</h2>
      <FuncComb elgendyName="abdooooooooo baymasy" />
      <ClassComb num1={10} num2={13} />
      <Button
        variant="contained"
        onClick={() => {
          nextPath("/");
        }}
      >
        back to view1
      </Button>
    </div>
  );
}
