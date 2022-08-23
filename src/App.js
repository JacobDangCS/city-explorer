import axios from 'axios';
import './App.css';
import React from 'react';


//CALLS AND SETS STATES & FORM BELOW

class App extends React.Component() {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: ''
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.getCityData}>
          <label> Pick a city!
            <input type='text' onInput={this.handleInput} />
            <button type='submit'> Explore! </button>
          </label>
        </form>
        {this.state.error ? <p>{this.state.error.message}</p> : <p>{this.state.cityData}</p>}
      </>
    );
  }
}


//FUNCTIONS OUTSIDE OF RENDER BELOW


handleInput = (e) => {
  e.preventDefault();
  this.setState({
    city.e.target.value
  })
}

getCityData = async (e) => {
  e.preventDefault();
  try {
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format.json`;

    let cityData = await axios.get(url)
  } catch (error) {
    this.setState{
      (
        error: true,
        errorMessage: error.message
      )}
  }
}


export default App;