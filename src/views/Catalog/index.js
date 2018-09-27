import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './pagination.css';
import {InstantSearch, SearchBox, Stats, Pagination} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Sidebar from '../../components/Sidebar';
import Results from '../../components/Results';
import ModalBox from '../../components/ModalBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messierActive: this.props.messierActive,
            sidebarSmallVisible: false,
            sidebarCollapsed: false,
            modalVisible: false,
            selectedHit: null
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.hideSidebarOnMobile = this.hideSidebarOnMobile.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleSidebar() {
        if(window.innerWidth > 767)
        {
            this.setState({
                sidebarCollapsed: !this.state.sidebarCollapsed,
            });
        }
        else
        {
            this.setState({
                sidebarSmallVisible: !this.state.sidebarSmallVisible,
            });
        }
    }

    hideSidebarOnMobile() {
        if(window.innerWidth > 767)
            return;

        this.setState({
            sidebarSmallVisible: false,
        });
    }

    toggleModal(hit) {
        this.setState({
            modalVisible: !this.state.modalVisible,
            selectedHit: hit
        });
    }

    render() {
        return (
            <div>
                <header>
                    <div className="leftGroup">
                        <div className="sidebarBtn" onClick={this.toggleSidebar}><FontAwesomeIcon icon={faBars} size="lg" /></div>
                    </div>
                    <h1>New General Catalogue</h1>
                    <div className="rightGroup">
                        <Link to="/" className=""><FontAwesomeIcon icon={faHome} size="lg" /></Link>
                    </div>
                </header>
                <InstantSearch
                    appId="S3V2AGHEQI"
                    apiKey="37db05e5e6815a43ccc75d826ee6e9b2"
                    indexName="ngc_dev"
                >
                    <Sidebar
                        sidebarCollapsed={this.state.sidebarCollapsed}
                        sidebarSmallVisible={this.state.sidebarSmallVisible}
                        messierActive={this.state.messierActive}
                    />
                    <div className={ClassNames({catalog: true, sidebarCollapsed: this.state.sidebarCollapsed})}>
                        <div className="container-fluid">
                            <SearchBox translations={{placeholder:'Discover'}} onFocus={this.hideSidebarOnMobile} />
                            <Stats />
                            <Results toggleModal={this.toggleModal} />
                            <Pagination />
                        </div>
                    </div>
                </InstantSearch>
                <ModalBox
                    visible={this.state.modalVisible}
                    toggle={this.toggleModal}
                    content={this.state.selectedHit}
                    className="modalHit"
                />
            </div>
        );
    }
}

Catalog.defaultProps = {
    messierActive: false,
};

Catalog.propTypes = {
    messierActive: PropTypes.bool,
};

export default Catalog;
