import {ADD_REMINDER, CLEAR_REMINDER, HIDE_ALERT, REMOVE_REMINDER, SHOW_ALERT} from '../types'
import { bake_cookie, read_cookie } from 'sfcookies'
import { v4 as uuidv4 } from 'uuid';

const initState = {
    reminders: read_cookie('reminders'),
    alertModel: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    let reminders = [];
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state.reminders,{id: uuidv4(),text: action.text, date: action.date, }]
            bake_cookie('reminders',reminders)
            return { ...state, reminders:reminders }
            
        case REMOVE_REMINDER:
            reminders = state.reminders.filter(reminder=>!(reminder.text===action.text&&reminder.date===action.date))
            bake_cookie('reminders',reminders)
            return { ...state, reminders:reminders }
        
        case CLEAR_REMINDER:
            bake_cookie('reminders',[])
            return { ...state, reminders:[] }

        case SHOW_ALERT:
            return {...state, alertModel:true}

        case HIDE_ALERT:
            return {...state, alertModel:false}
        
        default:
            return state
    }
}
