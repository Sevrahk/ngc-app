import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="title">
                    <h2>What is the New General Catalogue?</h2>
                </div>
                <div className="content">
                    The New General Catalogue of Nebulae and Clusters of Stars (abbreviated as NGC) is a catalogue of deep-sky objects compiled by John Louis Emil Dreyer in 1888. It expands upon the cataloguing work of William and Caroline Herschel, and John Herschel's General Catalogue of Nebulae and Clusters of Stars. The NGC contains 7,840 objects, known as the NGC objects. It is one of the largest comprehensive catalogues, as it includes all types of deep space objects, including galaxies, star clusters, emission nebulae and absorption nebulae. Dreyer also published two supplements to the NGC in 1895 and 1908, known as the Index Catalogues, describing a further 5,386 astronomical objects.
                </div>
                <footer>
                    <Link to="/">
                        Homepage
                        <FontAwesomeIcon icon={faHome} size="2x" />
                    </Link>
                </footer>
            </div>
        );
    }
}

export default Home;
