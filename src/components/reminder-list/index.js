import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import ReminderItem from '../reminder-item';
import {removeReminder} from '../../redux/actions';

const ReminderList = (props) => {
    return (
        <TransitionGroup className="list-group">
        {
            props.reminders.map((reminder)=>(
                <CSSTransition key={ reminder.id} timeout={700} classNames="item">
                    <ReminderItem reminder={reminder}/>
                </CSSTransition>
            ))
        }
        </TransitionGroup>
    )
}

const mapStateToProps = (state) => ({
    reminders: state.reminders
})

const mapDispatchToProps = {
    removeReminder
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);