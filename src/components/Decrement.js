import React from "react";
import { connect } from "react-redux";
import action from "../redux/actions/index";
import {getDecTwoCounter, getDecOneCounter} from "../redux/reducers";

const Decrement = ({counter_one,counter_two,d_dec_one,d_dec_two,d_global_dec_one, d_global_dec_two})=>{
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={() => {d_dec_one();d_global_dec_one()}}>Decrement By 1</button>
              </td>
              <td>
                <p>Decrement Value : {counter_one}</p>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => {d_dec_two(); d_global_dec_two()}}>Decrement By 2</button>
              </td>
              <td>
                <p>Decrement Value : {counter_two}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

let mapStateToProp = (state)=>{
    return {
        counter_two: getDecTwoCounter(state),
        counter_one: getDecOneCounter(state)
    }
}

let mapDispatchToProp = (dispatch)=>{
    return {
        d_dec_two: ()=>dispatch(action('DEC_TWO')),
        d_dec_one: ()=>dispatch(action('DEC_ONE')),
        d_global_dec_one: ()=>dispatch(action('GLOBAL_DEC_ONE')),
        d_global_dec_two: ()=>dispatch(action('GLOBAL_DEC_TWO'))
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Decrement)