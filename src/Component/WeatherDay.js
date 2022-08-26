import React from 'react';

class WeatherDay extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.key}</p>
                <p>{this.props.date}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }

}

export default WeatherDay; 