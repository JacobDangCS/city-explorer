import React from 'react';

class MovieRender extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.key}</p>
                <p>{this.props.title}</p>
                <p>{this.props.overview}</p>
                <p>{this.props.averagevotes}</p>
                <p>{this.props.totalvotes}</p>
                <p>{this.props.imageurl}</p>
                <p>{this.props.popularity}</p>
                <p>{this.props.releasedon}</p>
            </div>
        )
    }
}

export default MovieRender; 