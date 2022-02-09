import React from "react";
import { connect } from "react-redux";
import action from "../redux/actions/index";
import {getIncTwoCounter,getIncOneCounter} from "../redux/reducers";

const Increment = ({counter_one,counter_two,d_inc_two,d_inc_one})=>{
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={() => d_inc_one()}>Increment By 1</button>
              </td>
              <td>
                <p>Increment Value : {counter_one}</p>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => d_inc_two()}>Increment By 2</button>
              </td>
              <td>
                <p>Increment Value : {counter_two}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

let mapStateToProp = (state)=>{
    return {
        counter_one: getIncOneCounter(state),
        counter_two: getIncTwoCounter(state)
    }
}
let mapDispatchToProp = (dispatch)=>{
    return {
        d_inc_one: ()=> dispatch(action('INC_ONE',{})),
        d_inc_two: ()=> dispatch(action('INC_TWO',{}))
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Increment)