import React from 'react'
import { connect } from 'react-redux'
import {incrementAction} from '../action'

const IncrementComponent = ({increment,dispatchInc})=>{
    return (
        <div>
            <button onClick={dispatchInc}>Increment Me</button>
            <p>{increment}</p>
        </div>
    )
}

const mapStateToProps = ({increment})=>{
    return {
        increment
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatchInc: ()=>dispatch(incrementAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncrementComponent)