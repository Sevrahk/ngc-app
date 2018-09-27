import React, { Component } from 'react';
import './index.css';
import { connectRange } from 'react-instantsearch-dom';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';

class SearchRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValues: {
                min: this.props.min,
                max: this.props.max
            }
        };
    }

    componentWillReceiveProps(sliderState) {
        if (sliderState.canRefine) {
            this.setState({
                currentValues: {
                    min: sliderState.currentRefinement.min,
                    max: sliderState.currentRefinement.max
                }
            });
        }
    }

    onValuesUpdated = sliderState => {
        this.setState({
            currentValues: {
                min: sliderState.values[0],
                max: sliderState.values[1]
            }
        });
    };

    onChange = sliderState => {
        if (
            this.props.currentRefinement.min !== sliderState[0] ||
            this.props.currentRefinement.max !== sliderState[1]
        ) {
            this.props.refine({
                min: sliderState[0],
                max: sliderState[1]
            });
        }
    };

    render() {
        const { min, max, currentRefinement } = this.props;
        const { currentValues } = this.state;

        return min !== max ? (
            <div>
                <Range
                    min={min}
                    max={max}
                    value={[currentRefinement.min, currentRefinement.max]}
                    allowCross={false}
                    onChange={this.onChange}
                    step={0.1}
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>{currentValues.min}</div>
                    <div>{currentValues.max}</div>
                </div>
            </div>
        ) : null;
    }
}

SearchRange.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    currentRefinement: PropTypes.object,
    refine: PropTypes.func.isRequired,
    canRefine: PropTypes.bool.isRequired
};

export default connectRange(SearchRange);
