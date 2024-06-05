import React, { Component } from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';

class ContentWrapper extends Component {
    constructor(props) {
		super(props);
        this.state = {
            darkModeIcon: "moon",
            setBgColor: ""
        }
        this.handleDarkMode = this.handleDarkMode.bind(this)
	}

    handleDarkMode(event) {
        event.preventDefault();
        this.state.darkModeIcon === "moon" ? this.setState({ darkModeIcon: "sun" }) : this.setState({ darkModeIcon: "moon" })
        this.state.setBgColor === "" ? this.setState({ setBgColor: "bg-secondary" }) : this.setState({ setBgColor: "" })
    }

    render() {
        return (
            <>
                {/*<!-- Content Wrapper -->*/}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/*<!-- Main Content -->*/}
                    <div id="content">
                        <TopBar handleDarkMode={this.handleDarkMode} darkModeIcon={this.state.darkModeIcon} />
                        <ContentRowTop setBgColor={this.state.setBgColor} />
                        <Movie setBgColor={this.state.setBgColor}/>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}

export default ContentWrapper;