import React, { Component } from 'react';
import './index.css';
import Calculator from './Calculator';
import PropTypes from 'prop-types';
import { faSpaceShuttle, faPlane, faFighterJet, faCarSide } from '@fortawesome/free-solid-svg-icons'
import entreprise from '../../assets/img/entreprise.png';
import falcon from '../../assets/img/falcon.png';

class Travel extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }

    render() {
        if(!this.props.distance)
            return null;

        return <div className="travel">
            <Calculator distance={this.props.distance} speed={9853578500000000} image={falcon} />
            <Calculator distance={this.props.distance} speed={552577459200} image={entreprise} />
            <Calculator distance={this.props.distance} speed={28000} icon={faSpaceShuttle} />
            <Calculator distance={this.props.distance} speed={2173} icon={faFighterJet} />
            <Calculator distance={this.props.distance} speed={1020} icon={faPlane} />
            <Calculator distance={this.props.distance} speed={130} icon={faCarSide} />
        </div>;
    }
}

Travel.propTypes = {
    distance: PropTypes.number
};

export default Travel;
