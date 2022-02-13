import React, { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import moment from 'moment';
import {removeReminder, addAlarm, showAlert} from '../../redux/actions';
import { connect } from 'react-redux';


const ReminderItem = (props) => {
  // const {reminder} = props;
  // const [reminder] = props.reminders.filter(reminder => reminder.id === props.reminder.id)
  const [reminder] = useState(props.reminder)
  const [date, setDate] = useState(moment(new Date(reminder.date)).fromNow())
  
  
  const updateDate = () => {
    const reminderDate = new Date(reminder.date)
    const updatedDate = new Date();
    updatedDate.setSeconds(0);
    if((updatedDate.toString() === reminderDate.toString())&&props.dAlarm) {
      props.addAlarm(reminder.text)
      props.showAlert()
    }
    setDate(moment(new Date(reminder.date)).fromNow())
  }

  setInterval(updateDate, 1000 );

  return (
    <CSSTransition key={reminder.id} timeout={700} classNames="item">
      <ListGroup.Item>
          <div>{reminder.text}</div>
          <div style={{color: 'gray'}}>{date}</div>
          <Button variant="danger" className="delete-btn" onClick={()=>props.removeReminder(reminder.id)}>Delete</Button>
      </ListGroup.Item>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => ({
  show: state.show,
  reminders: state.reminders,
  dAlarm: state.dAlarm,
})
const mapDispatchToProps = {
  removeReminder,
  addAlarm,
  showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderItem);