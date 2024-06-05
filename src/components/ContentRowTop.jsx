import React, { Component } from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
class ContentRowTop extends Component {
	render() {
		return (
			<>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}

					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className={`card-header py-3 ${this.props.setBgColor}`}>
									<h5 className={ this.props.setBgColor ? 'm-0 font-weight-bold  text-white' :  ' m-0 font-weight-bold  text-gray-800'}>Last movie in Data Base</h5>
								</div>
								<div className={`card-body ${this.props.setBgColor}`}>
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenFondo} alt=" Star Wars - Mandalorian " />
									</div>
									<p style={this.props.setBgColor ? { color: 'white' } : { color: 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb setBgColor={this.props.setBgColor} />
						{/*<!--End Genres In Db-->*/}
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}
			</>
		)
	}
}
export default ContentRowTop;