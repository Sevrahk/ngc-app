import React, { Component } from 'react';
import './index.css';
import {RefinementList, PoweredBy} from 'react-instantsearch-dom';
import Range from '../Range';
import RefinementButton from '../RefinementButton';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapsed: this.props.sidebarCollapsed,
            messierActive: this.props.messierActive,
            hemisphereVisibleActive: this.props.hemisphereVisibleActive,
            userNorthenHemisphere: null
        };

        this.toggleMessier = this.toggleMessier.bind(this);
        this.toggleHemisphere = this.toggleHemisphere.bind(this);
    }

    componentDidMount() {
        if (!navigator.geolocation)
            return;

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({userNorthenHemisphere: position.coords.latitude >= 0});
        });
    }

    toggleMessier() {
        this.setState({messierActive: !this.state.messierActive})
    }

    toggleHemisphere() {
        this.setState({hemisphereVisibleActive: !this.state.hemisphereVisibleActive})
    }

    render() {
        return <div className={ClassNames({sidebar: true, sidebarCollapsed: this.props.sidebarCollapsed, sidebarSmallVisible: this.props.sidebarSmallVisible})}>
            <div className="sidebarContent">
                <RefinementButton
                    attribute="isMessierObject"
                    label="Show only Messier's objects"
                    value={true}
                    active={this.state.messierActive}
                    handleClick={this.toggleMessier}
                />
                <RefinementButton
                    attribute="vectorPositive"
                    label="Visible from my hemisphere"
                    value={this.state.userNorthenHemisphere}
                    active={this.state.hemisphereVisibleActive}
                    handleClick={this.toggleHemisphere}
                    disabled={this.state.userNorthenHemisphere === null}
                />
                <h6>Type</h6>
                <RefinementList attribute="type" />
                <h6>Constellation</h6>
                <RefinementList attribute="constellation" searchable />
                <h6>Magnitude</h6>
                <Range
                    attribute="magnitude"
                    precision={1}
                />
                <div className="info">Low magnitude = brighter objects</div>
                <h6>Observatory type</h6>
                <RefinementList attribute="observatoryType" />
            </div>
            <PoweredBy />
        </div>;
    }
}

Sidebar.defaultProps = {
    sidebarCollapsed: false,
    sidebarSmallVisible: false,
    messierActive: false,
    hemisphereVisibleActive: false,
};

Sidebar.propTypes = {
    sidebarCollapsed: PropTypes.bool,
    sidebarSmallVisible: PropTypes.bool,
    messierActive: PropTypes.bool,
    hemisphereVisibleActive: PropTypes.bool,
};

export default Sidebar;
