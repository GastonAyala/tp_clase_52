import React, { Component } from 'react'
import Genre  from './Genre';

class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genresList: [],
      backgroundColor: ""
    }
  }
  componentDidMount() {
    fetch('api/genres')
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({ genresList: data })
      })
      .catch(err => console.log(err))
  }


  handleMouseOver = () => {
    this.state.backgroundColor ? this.setState({backgroundColor: ""}) : this.setState({backgroundColor: "bg-secondary"})
  }
  render() {
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className= {`card-header py-3 ${this.props.setBgColor}`}>
              <h6 onMouseOver={this.handleMouseOver} className={`m-0 font-weight-bold ${this.props.setBgColor ? this.props.setBgColor + ' text-white' : "text-gray-800 "}`}>Genres in Data Base</h6>
            </div>
            <div className={`card-body py-3 ${this.props.setBgColor ? this.props.setBgColor : this.state.backgroundColor}`}>
              <div className="row">
                {
                  this.state.genresList.map((genre, index) => {
                    return <Genre  {...genre} key={index} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default GenresInDb