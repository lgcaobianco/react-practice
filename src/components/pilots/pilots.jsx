import React, { Component } from "react";
import PilotList from "./pilot-list/pilot-list";
import "./pilots.css"

export default class Pilots extends Component{
    render() {
        return (
        <div className="item">
            <p>Pilots list is</p>
            <PilotList handleClick={this.logItemClicked}></PilotList>
        </div>
        );
    }

    logItemClicked = (text) =>{ 
        console.log("element clicked in child was " +text);
    }
}