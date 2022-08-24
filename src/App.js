import axios from 'axios';
import './App.css';
import React from 'react';
import Weather from './Weather';
import Card from 'react-bootstrap/Card'

//CALLS AND SETS STATES & FORM BELOW

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      long: '',
      lata: '',
      location: {},
      searchCity: '',
      weather:{},
      showWeather: false
    }
  }

  //OPERATIONS FOR THE APP 

  handleInput = e => {
    e.preventDefault();
    this.setState({
      searchCity: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchCity}&format=json`;
      console.log();
      let cityData = await axios.get(url)
      console.log(cityData.data[0]);
      this.setState({
        city: cityData.data[0].display_name,
        long: cityData.data[0].lon,
        lata: cityData.data[0].lat
      })
      await this.getWeather();
    } catch (error) {
      this.setState({
          error: true,
          errorMessage: error.response
      })
    }
  };

  getWeather = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchCity}&lon=${this.state.long}&lat=${this.state.lata}`;
      let weatherResponse = await axios.get(url)
      console.log(weatherResponse)
      this.setState({
        weather: weatherResponse.data,
        showWeather: true
      })
    } catch (error) {
      response.send(error.message).status(500);
    }
  }

  //Processes the above data

  render() {
    return (
      <>
        <form onSubmit={this.getCityData}>
          <label> Pick a city!
            <input type='text' onInput={this.handleInput} />
            <button type='submit'> Explore! </button>
          </label>
        </form>

        {this.state.showWeather && <Weather weatherDisplay={this.state.weather}/>}

        {this.state.error && <p>{this.state.error.message}</p>}
        {this.state.lata !== '' && <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lata},${this.state.long}&zoom=14&size=600x600&format=png`} alt='map'/>}
        <p>{this.state.city}</p>
        <p>{this.state.lata}</p>
        <p>{this.state.long}</p>
      </>
    );
  }
}

export default App;