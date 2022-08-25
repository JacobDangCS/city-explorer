import React from 'react';


class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.weatherDisplay.map((obj, i) => (
                    <div key={i}>
                        <p>{obj.date}</p>
                        <p>{obj.description}</p>
                    </div>
                ))}
            </>
        )
    }
}

export default Weather;