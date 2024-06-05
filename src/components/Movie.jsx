import React, { Component } from 'react'
import MovieList from './MovieList';

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviesList: []
		}
	}

	async componentDidMount() {
		try {
			const { data } = await fetch('api/movies').then((res) => res.json());
			const dataFormat = data.map(({ id, title, rating, awards, length }) => {
				return {
					id,
					title,
					rating,
					awards,
					length
				}
			})
			this.setState({
				moviesList: dataFormat
			})
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
						
							<table className={`table table-bordered ${this.props.setBgColor ? this.props.setBgColor + ' text-white' : ""}`} id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>

								<MovieList moviesList={this.state.moviesList} />

								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Movie