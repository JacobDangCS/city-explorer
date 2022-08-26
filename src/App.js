import axios from 'axios';
import './App.css';
import React from 'react';
import Weather from './Component/Weather';
import Card from 'react-bootstrap/Card';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Movie from './Component/Movie';

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
      showWeather: false,
      movie: {},
      showMovie: false
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
      let cityData = await axios.get(url)
      this.setState({
        city: cityData.data[0].display_name,
        long: cityData.data[0].lon,
        lata: cityData.data[0].lat
      })
      await this.getWeather(cityData.data[0].lat, cityData.data[0].lon);
      await this.getMovie(this.state.searchCity);
    } catch (error) {
      this.setState({
          error: true,
          errorMessage: error.response
      })
    }
  };

  getWeather = async (lat, lon) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`;
      console.log(url)
      let weatherResponse = await axios.get(url)
      this.setState({
        weather: weatherResponse.data,
        showWeather: true
      })
    } catch (error) {
      console.log(error);
    }
  }

  getMovie = async (movieData) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?cityName=${movieData}`;
      let movieResponse = await axios.get(url)
      this.setState({
        movie: movieResponse.data,
        showMovie: true
      })

    } catch (error) {
      console.log(error);
    }

  }

  //Processes the above data

  render() {
    return (
      <>
      <div>
        <Form onSubmit={this.getCityData}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder="Pick a city!" 
              onInput={this.handleInput}
            />
          </Form.Group>
          <Button type ="submit">
            Explore!
          </Button>
        </Form>

      <Card style={{width: '20rem'}}>
        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lata},${this.state.long}&zoom=14&size=600x600&format=png`}/>
        
        <Card.Body>

          <Card.Title>City: {this.state.city}</Card.Title>

          <Card.Text>
            Latitude: {this.state.lata}
            <br/>
            <br/>
            Longitude: {this.state.long}
            <br/>
            <br/>
            Weather: {this.state.showWeather && <Weather weatherDisplay={this.state.weather}/>}
            <br/>
            <br/>
            Movie: {this.state.showMovie && <Movie movieDisplay={this.state.movie}/>}
            <br/>
            <br/>
            Errors: {this.state.error && <p>{this.state.error.message}</p>}
            
          </Card.Text>

        </Card.Body>
      </Card>

      </div>
      </>
    );
  }
}

export default App;