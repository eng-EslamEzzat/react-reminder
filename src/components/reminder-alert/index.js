import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import {showAlert, hideAlert, removeAlarm} from '../../redux/actions';

const ReminderAlert = (props) => {
    const [audio] = useState(new Audio('https://assets.mixkit.co/sfx/download/mixkit-classic-alarm-995.wav'));
    audio.loop = true;

    const {show, hideAlert, alarm, removeAlarm} = props;
    show&& audio.play();
    
    return (
        <Modal show={show} onHide={() => {hideAlert(); alarm&&removeAlarm(); audio.pause()}}>
            <Modal.Header closeButton>
            <Modal.Title>{show? "Alarm...": "Warning..."}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{show? alarm: "Seems you are already added this!"}</Modal.Body>
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