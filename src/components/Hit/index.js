import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Highlight} from 'react-instantsearch-dom';
import defaultImage from '../../assets/img/default.jpg';

class Hit extends Component {
    render() {
        let hit = this.props.item;
        let image = hit.image ? hit.image : defaultImage;
        return <div className="col-12 col-sm-4">
            <div className="hit" style={{backgroundImage: `url(${image})`}} onClick={() => this.props.toggleModal(hit)}>
                <div>
                    NGC <Highlight attribute="ngcNumber" tagName="b" hit={hit} /> <Highlight attribute="name" tagName="b" hit={hit} /><br />
                    Constellation: <Highlight attribute="constellation" tagName="b" hit={hit} />
                </div>
            </div>
        </div>;
    }
}

Hit.propTypes = {
    item: PropTypes.object,
    toggleModal: PropTypes.func,
};

export default Hit;
