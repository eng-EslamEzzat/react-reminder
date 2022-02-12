import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import {showAlert, hideAlert, removeAlarm} from '../../redux/actions';
const audio = new Audio('https://assets.mixkit.co/sfx/download/mixkit-classic-alarm-995.wav');
audio.loop = true;

const ReminderAlert = (props) => {

    const {show, hideAlert, alarm, removeAlarm} = props;
    alarm&& audio.play();
    return (
        <Modal show={show} onHide={() => {hideAlert(); alarm&&removeAlarm(); audio.pause()}}>
            <Modal.Header closeButton>
            <Modal.Title>{alarm? "Alarm...": "Warning..."}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{alarm? alarm: "Seems you are already added this!"}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => {hideAlert(); alarm&&removeAlarm(); audio.pause()}}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    show: state.alertModel,
    alarm: state.alarm
})

const mapDispatchToProps = {
    showAlert,
    hideAlert,
    removeAlarm
}
export default connect(mapStateToProps, mapDispatchToProps)(ReminderAlert);