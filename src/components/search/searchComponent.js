import React, {useEffect,useState} from "react";
import { connect } from "react-redux";
import './styles.css';
import {wheatherAction} from '../../actions';
import SearchButtonComponent from '../searchButton/searchButtonComponent'

const SearchComponent = ({getWheather}) => {
  const [country, setCountry] = useState("")
  let handleSubmit = (e)=>{
    e.preventDefault()
    getWheather({location:country})
  }

  return (
    <>
      <div className="card">
        <img src="wheather.png" alt="Avatar"></img>
        <div className="container">
          <h4>
            <b>City</b>
          </h4>
          {/* <form onSubmit={handleSubmit}>
            <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Enter city"></input>
            <button>Search</button>
          </form> */}
          <SearchButtonComponent p_country={country} p_setCountry={setCountry} onSubmit={handleSubmit}></SearchButtonComponent>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getWheather: (data)=>dispatch(wheatherAction(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
