import React, { Component } from 'react';
import classes from './Modal.module.scss';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={this.props.show ? classes.ModalOpen : classes.ModalClose}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;