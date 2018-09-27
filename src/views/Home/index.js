import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle, faUserAstronaut, faQuestion } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="container">
                    <div className="title">
                        <h1>New General Catalogue</h1>
                        <h2>of Nebulae and Clusters of Stars</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-11 col-sm-8">
                            <Link to="/catalog">
                                Explore the whole Universe
                                <FontAwesomeIcon icon={faSpaceShuttle} size="2x" />
                            </Link>
                            <Link to="/discover">
                                I'm starting to discover
                                <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
                            </Link>
                            <Link to="/about">
                                What is the New General Catalogue
                                <FontAwesomeIcon icon={faQuestion} size="2x" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
