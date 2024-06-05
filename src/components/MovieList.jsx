import React, { Component } from 'react'

class MovieList extends Component {
    render() {
        return (
            <>
                <tbody>
                    {this.props.moviesList.map(({id, title, rating, awards, length}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{rating}</td>
                            <td>{awards}</td>
                            <td>{length}</td>
                        </tr>
                    ))}
                </tbody>
            </>
        )
    }
}

export default MovieList