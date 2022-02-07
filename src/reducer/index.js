import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER} from '../types'
import { bake_cookie, read_cookie } from 'sfcookies'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    reminders: read_cookie('reminders'),
}

export default (state = initialState, action) => {
    let reminders = [];
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state.reminders,{id: uuidv4(),text: action.text, date: action.date, }]
            bake_cookie('reminders',reminders)
            return { reminders:reminders }
            
        case REMOVE_REMINDER:
            reminders = state.reminders.filter(reminder=>!(reminder.text===action.text&&reminder.date===action.date))
            bake_cookie('reminders',reminders)
            return { reminders:reminders }
        
        case CLEAR_REMINDER:
            bake_cookie('reminders',[])
            return { reminders:[] }

        default:
            return state
    }
}
