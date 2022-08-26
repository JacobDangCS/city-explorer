import React from 'react'
import MovieRender from './MovieRender';

class Movie extends React.Component {

    render() {
        return (
            <>
                {this.props.movieDisplay.map((obj, i) => (
                    <MovieRender 
                        key={i}
                        title={obj.title}
                        overview={obj.overview}
                        averagevotes={obj.average_votes}
                        totalvotes={obj.total_votes}
                        imageurl={obj.image_url}
                        popularity={obj.popularity}
                        releasedon={obj.released_on}
                    />
                ))}
            </>
        )
    }
}


export default Movie;