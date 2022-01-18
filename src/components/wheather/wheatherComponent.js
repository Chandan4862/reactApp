import React, { useEffect } from "react";
import { wheatherAction } from "../../actions";
import { connect } from "react-redux";
import "./styles.css";

let WheatherComponent = ({ wheatherData }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <img className="fa fa-user-circle" aria-hidden="true" src={wheatherData.current.condition.icon}></img>
            </div>
          </div>
        </div>

        <div className="slide slide2">
          <div className="content">
            <h3>Country: {wheatherData.location.country}</h3>
            <p>{wheatherData.current.condition.text}</p>
            <p>Temperature {wheatherData.current.feelslike_c}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ wheather }) => {
  return {
    wheatherData: wheather,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWheatherData: () => dispatch(wheatherAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WheatherComponent);
