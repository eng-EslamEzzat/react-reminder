import './App.css';
import {Form,Button,FormControl, Container, Image, ListGroup, Modal} from 'react-bootstrap'
import { connect } from 'react-redux';
import { addReminder, removeReminder, clearReminder } from './actions';
import { useState } from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './logo.svg'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

function App(props) {
 const [text, setText] = useState('');
 const [date, setDate] = useState(new Date())
 const [show, setShow] = useState(false)

 const showAlert = () => setShow(true)
 const hideAlert = () => setShow(false)

 const renderReminders = ()=>(
    props.reminders.map((reminder)=>(
      <CSSTransition key={reminder.id} timeout={700} classNames="item">
      <ListGroup.Item>
        <div>{reminder.text}</div>
        <div style={{color: 'gray'}}>{moment(new Date(reminder.date)).fromNow()}</div>
        <Button variant="danger" className="delete-btn" onClick={()=>props.removeReminder(reminder.text,reminder.date)}>Delete</Button>
      </ListGroup.Item>
      </CSSTransition>
    ))
 )
 
 let unique = true
 const formHandling = () => {
  unique = true
  text&&props.reminders.forEach(reminder => {
    if(reminder.text === text && reminder.date === date){
      unique = false
      showAlert()
    } 
  });
  (text&&unique)&&props.addReminder(text,date); setText("")
 }
  return (
    <>
      <Container >
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
          <Button onClick={formHandling}  variant="success" block>Add Reminder</Button>
          <TransitionGroup className="list-group">
          {/* <ListGroup> */}
          {renderReminders()}
          {/* </ListGroup> */}
          </TransitionGroup>
          <Button onClick={()=>props.clearReminder()} variant="danger" block>Clear Reminder</Button>
        </Form>
        <Modal show={show} onHide={hideAlert}>
        <Modal.Header closeButton>
          <Modal.Title>Warning...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seems you are already added this!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
