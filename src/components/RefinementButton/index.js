import React, { Component } from 'react';
import './index.css';
import {ToggleRefinement} from 'react-instantsearch-dom';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class RefinementButton extends Component {
    handleClick() {
        if(this.props.disabled)
            return;

        this.props.handleClick();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState || this.props !== nextProps;
    }

    render() {
        return <div className={ClassNames({ToggleRefinementTrigger: true, active: this.props.active && !this.props.disabled, disabled: this.props.disabled})} onClick={() => this.handleClick()}>
            {this.props.label}
            <ToggleRefinement
                attribute={this.props.attribute}
                label={this.props.label}
                value={this.props.value}
                defaultRefinement={this.props.active && !this.props.disabled}
            />
        </div>;
    }
}

RefinementButton.defaultProps = {
    active: false,
    disabled: false,
};

RefinementButton.propTypes = {
    attribute: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    active: PropTypes.bool,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default RefinementButton;
