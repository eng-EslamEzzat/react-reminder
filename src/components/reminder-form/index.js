import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { addReminder, removeReminder, clearReminder, showAlert } from '../../redux/actions';


const ReminderForm = (props) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date())

    let unique = true
    const formHandling = () => {
        unique = true
        text&&props.reminders.forEach(reminder => {
            if(reminder.text === text && reminder.date === date){
                unique = false
                props.showAlert()
            } 
        });
        date.setSeconds(0);
        (text&&unique)&& props.addReminder(text,date); setText("");
    }
    
    return (
        <Form>
            <FormControl onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder="What should u do?"/>
            {/* <FormControl onChange={(e)=>setDate(e.target.value)} Value={date} type="datetime-local"/> */}
            <DatePicker
                className="form-control"
                selected={date}
                value={date}
                placeholderText="Enter the Date"
                onChange={(d)=>setDate(d)}
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
            />
            <Button onClick={formHandling}  variant="success" block>Add Reminder</Button>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    reminders: state.reminders
})

const mapDispatchToProps = {
    addReminder,
    removeReminder,
    clearReminder,
    showAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderForm);