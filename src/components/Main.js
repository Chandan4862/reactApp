import React from "react";
import {connect} from "react-redux";
import {getGloabalCounter} from "../redux/reducers";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Main = ({global_counter})=>{

    return (
        <div>
            <Increment/>
            <Decrement/>
            <h1>Global Counter : {global_counter}</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        global_counter: getGloabalCounter(state)
    }
}

export default connect(mapStateToProps, null)(Main)