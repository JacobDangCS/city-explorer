import React from 'react';


class Weather extends React.Component{

    
    render(){
        let daysToRender = this.props.weatherDisplay.map((obj, i) => (
            <div key={i}>
            <p>{obj.date}</p>
            <p>{obj.description}</p>
            </div>
        ));
        
        return(
            <>
            {daysToRender}
            </>
            )
        }
}

export default Weather;