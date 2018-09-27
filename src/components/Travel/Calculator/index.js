import React, { Component } from 'react';
import PropTypes from 'prop-types';
import humanizeDuration from 'humanize-duration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mpcToKm = 30856775812800000000;

class Calculator extends Component {
    addSeparator(str) {
        return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    CalculateTime() {
        let distanceKm = this.props.distance * mpcToKm;
        let time = distanceKm / this.props.speed * 60 * 60 * 1000;

        return this.addSeparator(humanizeDuration(time, {largest: 1, round: true}));
    }

    render() {
        return <div>
                <div>
                    {this.props.icon ? <FontAwesomeIcon icon={this.props.icon} size="lg" /> : <img src={this.props.image} alt="" />}
                </div>
                <span></span>{this.CalculateTime()}
        </div>;
    }
}

Calculator.propTypes = {
    speed: PropTypes.number,
    distance: PropTypes.number,
    icon: PropTypes.object,
    image: PropTypes.string
};

export default Calculator;
