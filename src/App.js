import './App.css';
import {Form,Button,FormControl, Container, Image, ListGroup} from 'react-bootstrap'
import { connect } from 'react-redux';
import { addReminder, removeReminder, clearReminder } from './actions';
import { useState } from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './logo.svg'


function App(props) {
 const [text,setText] = useState('');
 const [date, setDate] = useState(new Date())

 const renderReminders = ()=>(
    props.reminders.map((reminder,index)=>(
      <ListGroup.Item key={index}>
        <div>{reminder.text}</div>
        <div>{moment(new Date(reminder.date)).fromNow()}</div>
        <Button variant="danger"  className="delete-btn" onClick={()=>props.removeReminder(reminder.text,reminder.date)}>Delete</Button>
        </ListGroup.Item>
    ))
 )
  return (
    <>
      <Container>
        <Image
          src={logo} />
        <div className="title"><h1>react reminder</h1></div>
        <Form>
          <FormControl onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder="What should u do?"/>
          {/* <FormControl onChange={(e)=>setDate(e.target.value)} Value={date} type="datetime-local"/> */}
          <DatePicker
            className="form-control"
            selected={date}
            value={date}
            placeholderText="Enter the Date"
            onChange={d=>setDate(d)}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
          <Button onClick={()=>{text&&props.addReminder(text,date);setText("")}}  variant="success" block>Add Reminder</Button>
          <ListGroup>
          {renderReminders()}
          </ListGroup>
          <Button onClick={()=>props.clearReminder()} variant="danger" block>Clear Reminder</Button>
        </Form>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  reminders: state.reminders
})

const mapDispatchToProps = {
  addReminder,
  removeReminder,
  clearReminder
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
