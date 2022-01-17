import React, { useEffect } from 'react';
import {wheatherAction} from '../action';
import {connect} from 'react-redux'

let WheatherComponent = (
    {
        wheatherData,
        getWheatherData
    }
)=>{
    useEffect(()=>{
        console.log('wheatherData',wheatherData)
    },[wheatherData])
    return (
      <>
        <button onClick={getWheatherData}>Get Forecast</button>
        {wheatherData === "FAILED" ? (
          <p>Failed To load data</p>
        ) : (
          <>
            {wheatherData.forecast && wheatherData.forecast.forecastday ? (
              <>
                {wheatherData.forecast.forecastday.map((ele) => (
                 <>
                 <p>Location: {wheatherData.location.country}</p>
                 <p>Date: {ele.date}</p>
                 <p>Moon Phase: {ele.astro.moon_phase}</p>
                 <p>----------------------</p>
                 </>
                )
                )}
              </>
            ) : (
              <p>Err...</p>
            )}
          </>
        )}
        <p></p>
      </>
    );
}

const mapStateToProps = ({wheather})=>{
    return {
        wheatherData: wheather
    }
}

const mapDispatchToProps = (dispatch)=>({
    getWheatherData : ()=>dispatch(wheatherAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(WheatherComponent)