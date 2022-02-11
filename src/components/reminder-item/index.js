import React, { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import moment from 'moment';
import {removeReminder} from '../../redux/actions';
import { connect } from 'react-redux';


const ReminderItem = (props) => {
  const {reminder} = props;
  const [date, setDate] = useState(moment(new Date(reminder.date)).fromNow())

  const updateDate = () => {
    const updatedDate = moment(new Date(reminder.date)).fromNow();
    setDate(updatedDate)
  }

  setInterval(updateDate, 40000 );

  return (
    <CSSTransition key={reminder.id} timeout={700} classNames="item">
      <ListGroup.Item>
          <div>{reminder.text}</div>
          <div style={{color: 'gray'}}>{date}</div>
          <Button variant="danger" className="delete-btn" onClick={()=>props.removeReminder(reminder.text,reminder.date)}>Delete</Button>
      </ListGroup.Item>
    </CSSTransition>
  )
}

const mapDispatchToProps = {
  removeReminder
}

export default connect(null, mapDispatchToProps)(ReminderItem);