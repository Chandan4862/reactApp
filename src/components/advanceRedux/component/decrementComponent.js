import React from 'react';
import { connect } from 'react-redux';
import { decrementAction } from '../action';

const DecrementComponent = ({decrement,decrementDispatch})=>{
    return (
        <div>
            <button onClick={decrementDispatch}>Decrement Me</button>
            <p>{decrement}</p>
        </div>
    )
}

const mapStateToProps = ({decrement})=>(
    {
        decrement
    }
)

const mapDispatchToProps = (dispatch)=>({
    decrementDispatch: ()=>dispatch(decrementAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(DecrementComponent)