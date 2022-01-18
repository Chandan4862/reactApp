import React, { Fragment } from "react";
import { Provider, connect } from "react-redux";
import ContainerComponent from "./components/container/containerComponent";
import store from "./store/store";

const MainComponent = ({ wheatherData, error }) => {
  return (
    <Provider store={store}>
      <Fragment>
          <ContainerComponent></ContainerComponent>
      </Fragment>
    </Provider>
  );
};

export default MainComponent;
