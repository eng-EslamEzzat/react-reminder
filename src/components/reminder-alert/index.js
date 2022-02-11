import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import {showAlert, hideAlert} from '../../redux/actions';


const ReminderAlert = (props) => {

    const {show, hideAlert} = props;
    return (
        <Modal show={show} onHide={() => hideAlert()}>
            <Modal.Header closeButton>
            <Modal.Title>Warning...</Modal.Title>
            </Modal.Header>
            <Modal.Body>Seems you are already added this!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => hideAlert()}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    show: state.alertModel,
})

const mapDispatchToProps = {
    showAlert,
    hideAlert
}
export default connect(mapStateToProps, mapDispatchToProps)(ReminderAlert);