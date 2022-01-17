import React from 'react';
import {connect} from 'react-redux'

const SumComponent = ({sum,increment,decrement})=>{
    return (
        <div>
            SUM is: {increment+decrement}
        </div>
    )    
}

const mapStateToProps = ({increment,decrement})=>{
 return {increment,decrement}
}

export default connect(mapStateToProps,null)(SumComponent)
