import React, { Component } from 'react';
import {connectHits} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Hit from '../Hit';

function CustomHits({ hits, toggleModal }) {
    return (
        <div className="row">
            {hits.map(hit => (
                <Hit item={hit} key={hit.objectID} toggleModal={toggleModal} />
            ))}
        </div>
    );
}

class Results extends Component {
    render() {
        return (
            <div className="resultContainer">
                <ConnectedHits toggleModal={this.props.toggleModal} />
            </div>
        );
    }
}

const ConnectedHits = connectHits(CustomHits);

Results.propTypes = {
    toggleModal: PropTypes.func,
};

export default Results;
