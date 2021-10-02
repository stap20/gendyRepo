import React from "react";
import ClassComb from "../components/classcomb1";
import Button from '@mui/material/Button';

export default function View2(props) {
  var nextPath = (path) => {
    props.history.push(path);
  };

  return (
    <div>
      <h3>Page2</h3>
      <p>wasaaaaaaaaaaa3 al weeeeeeeeeeb gaaaaaaaaaaaaaay</p>
      <h2>easy easy pezzy pezzy</h2>
      <h4>mas2alet gam3 sahlaaaaaaaaaaa ahyyyy</h4>
      <ClassComb num1={2} num2={3} />
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
