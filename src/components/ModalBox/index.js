import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Travel from '../Travel';import defaultImage from '../../assets/img/default.jpg';

class ModalBox extends Component {
    render() {
        if(!this.props.content)
            return null;

        let content = this.props.content;
        let image = content.image ? content.image : defaultImage;
        return <Modal isOpen={this.props.visible} toggle={() => this.props.toggle()} className={this.props.className}>
            <ModalHeader toggle={() => this.props.toggle()} style={{backgroundImage: `url(${image})`}}>
                NGC {content.ngcNumber} {content.name}<br />
                <span>{content.type} of {content.constellation} constellation</span>
            </ModalHeader>
            <ModalBody>
                <ul>
                    <li>Discovered by <b>{content.discoverer}</b> in <b>{content.year}</b></li>
                    {content.magnitude ? (<li>Magnitude: <b>{content.magnitude}</b></li>) : ''}
                    <li>
                        Coordinates<br />
                        Right Ascension: <b>{content.rightAscension}</b><br />
                        Declination: <b>{content.declination}</b>
                    </li>
                    {content.distance ? (<li>Distance: <b>{content.distance} Megaparsec</b></li>) : ''}
                </ul>
                <Travel distance={content.distance} />
            </ModalBody>
            <ModalFooter onClick={() => this.props.toggle()}>
                CLOSE
            </ModalFooter>
        </Modal>;
    }
}

ModalBox.defaultProps = {
    visible: false,
};

ModalBox.propTypes = {
    visible: PropTypes.bool,
    toggle: PropTypes.func,
    content: PropTypes.object,
};

export default ModalBox;
