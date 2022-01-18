import React, { Fragment } from "react";
import { Provider, connect } from "react-redux";
import WheatherComponent from "../../components/wheather/wheatherComponent";
import SearchComponent from "../../components/search/searchComponent";

const ContainerComponent = ({wheatherData,error}) => {
  return (
      <Fragment>
        {wheatherData ? (
          <WheatherComponent></WheatherComponent>
        ) : (
          <>{error ? <p>{error}</p> : <SearchComponent></SearchComponent>}</>
        )}
      </Fragment>
  );
};

const mapStateToProps = ({ wheather,error }) => {
  return {
    wheatherData: wheather,
    error
  };
};

export default connect(mapStateToProps, null)(ContainerComponent);
