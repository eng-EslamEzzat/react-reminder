import './App.css';
import {Button, Container, Image} from 'react-bootstrap'
import { connect } from 'react-redux';
import { clearReminder } from './redux/actions';
import logo from './logo.svg'
import ReminderForm from './components/reminder-form';
import ReminderList from './components/reminder-list';
import ReminderAlert from './components/reminder-alert';

function App(props) {
 
  return (
    <Container >
      <Image
        src={logo} />
      <div className="title"><h1>esez reminder</h1></div>
      <ReminderForm />
      <ReminderList />
      <Button onClick={()=>props.clearReminder()} variant="danger" block>Clear Reminder</Button>
      <ReminderAlert />
    </Container>
  );

}

const mapDispatchToProps = {
  clearReminder
}

export default connect(null, mapDispatchToProps)(App);
