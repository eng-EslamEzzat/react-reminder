import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER, SHOW_ALERT, HIDE_ALERT} from '../types';

export const addReminder = (text,date) => (
    {
        type:ADD_REMINDER,
        text,
        date
    }
)

export const removeReminder = (text,date) => (
    {
        type:REMOVE_REMINDER,
        text,
        date
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