import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import {showAlert, hideAlert, removeAlarm, deadAlarm} from '../../redux/actions';

const ReminderAlert = (props) => {
    const [audio] = useState(new Audio('https://assets.mixkit.co/sfx/download/mixkit-classic-alarm-995.wav'));
    audio.loop = true;

    const {show, hideAlert, alarm, removeAlarm, dAlarm, deadAlarm} = props;
    (alarm&&dAlarm)&& audio.play();
    
    return (
        <Modal show={show&&dAlarm} onHide={() => {hideAlert(); alarm&&removeAlarm(); audio.pause(); deadAlarm()}}>
            <Modal.Header closeButton>
            <Modal.Title>{alarm&&dAlarm? "Alarm...": "Warning..."}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{alarm&&dAlarm? alarm: "Seems you are already added this!"}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => {hideAlert(); alarm&&removeAlarm(); audio.pause(); deadAlarm()}}>
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