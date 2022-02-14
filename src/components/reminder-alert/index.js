import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import {showAlert, hideAlert, removeAlarm, deadAlarm} from '../../redux/actions';

const ReminderAlert = (props) => {
    const [audio] = useState(new Audio('https://assets.mixkit.co/sfx/download/mixkit-classic-alarm-995.wav'));
    audio.loop = true;

    const {show, hideAlert, alarm, removeAlarm, dAlarm, deadAlarm} = props;
    (alarm&&dAlarm)&& audio.play();
    
    if (show) return (
        <Modal show={true} onHide={() => hideAlert()}>
            <Modal.Header closeButton>
            <Modal.Title>{"Warning..."}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{"Seems you are already added this!"}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => hideAlert() }>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
    else if (alarm&&dAlarm) return (
        <Modal show={true} onHide={() => {removeAlarm(); audio.pause(); deadAlarm()}}>
            <Modal.Header closeButton>
            <Modal.Title>{"Alarm..."}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{alarm}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => {removeAlarm(); audio.pause(); deadAlarm()}}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
    else return(
        <Modal show={false}>
            <Modal.Header closeButton>
            <Modal.Title>{(alarm&&dAlarm)? "Alarm...": "Warning..."}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{(alarm&&dAlarm)? alarm: "Seems you are already added this!"}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary">
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    show: state.alertModel,
    alarm: state.alarm,
    dAlarm: state.dAlarm,
})

const mapDispatchToProps = {
    showAlert,
    hideAlert,
    removeAlarm,
    deadAlarm
}
export default connect(mapStateToProps, mapDispatchToProps)(ReminderAlert);