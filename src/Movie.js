import React from 'react'

class Movie extends React.Component {

    render() {
        return (
            <>
                {this.props.movieDisplay.map((obj, i) => (
                    <div key={i}>
                        <p>{obj.title}</p>
                        <p>{obj.overview}</p>
                        <p>{obj.average_votes}</p>
                        <p>{obj.total_votes}</p>
                        <p>{obj.image_url}</p>
                        <p>{obj.popularity}</p>
                        <p>{obj.released_on}</p>
                    </div>
                ))}
            </>
        )
    }
}

export default Movie;