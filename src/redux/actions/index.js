import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER, SHOW_ALERT, HIDE_ALERT, ADD_ALARM, REMOVE_ALARM, DEAD_ALARM} from '../types';

export const addReminder = (text,date) => (
    {
        type:ADD_REMINDER,
        text,
        date
    }
)

export const removeReminder = (id) => (
    {
        type:REMOVE_REMINDER,
        id
    }
)

export const clearReminder = () => (
    {
        type:CLEAR_REMINDER,
    }
)

export const showAlert = () => (
    {
        type:SHOW_ALERT,
    }
)

export const hideAlert = () => (
    {
        type:HIDE_ALERT,
    }
)

export const addAlarm = (text) => (
    {
        type:ADD_ALARM,
        text: text
    }
)

export const removeAlarm = () => (
    {
        type:REMOVE_ALARM,
    }
)

export const deadAlarm = () => (
    {
        type:DEAD_ALARM,
    }
)