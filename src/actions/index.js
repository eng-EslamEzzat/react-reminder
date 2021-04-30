import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER} from '../types';

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