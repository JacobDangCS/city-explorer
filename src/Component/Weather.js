import React from 'react';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.weatherDisplay.map((obj, i) => (
                    <WeatherDay
                        key={i}
                        date={obj.date}
                        description={obj.description}
                    />
                ))}
            </>
        )
    }
}

export default Weather;