import React from "react";
import FuncComb from "../components/funccomb2";
import Button from '@mui/material/Button';

export default function View1(props){

    var nextPath = (path)=>{
        props.history.push(path)
    }

    return(
        <div>
            <h3>main Page</h3>
            <p>hamada yal3ab ya gendy</p>
            <h2>obaaaaaaaaaaaaaaaaaaaaa</h2>
            <FuncComb elgendyName="ahmed el gendaaaaaaaaaaaaaaaaaaay"/>
            <Button variant="contained" onClick={()=>{nextPath("/calc")}}>go to view 2</Button>
            <Button variant="contained" onClick={()=>{nextPath("/mixed")}}>go to view 3</Button>
        </div>
    )
}