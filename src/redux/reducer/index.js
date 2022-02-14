import {ADD_ALARM, ADD_REMINDER, CLEAR_REMINDER, DEAD_ALARM, HIDE_ALERT, REMOVE_ALARM, REMOVE_REMINDER, SHOW_ALERT} from '../types'
import { bake_cookie, read_cookie } from 'sfcookies'
import { v4 as uuidv4 } from 'uuid';

const initState = {
    reminders: read_cookie('reminders'),
    alertModel: false,
    alarm: '',
    dAlarm: true,
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
            reminders = state.reminders.filter(reminder=>!(reminder.id===action.id))
            bake_cookie('reminders',reminders)
            return { ...state, reminders:reminders }
        
        case CLEAR_REMINDER:
            bake_cookie('reminders',[])
            return { ...state, reminders:[] }

        case SHOW_ALERT:
            return {...state, alertModel:true,}

        case HIDE_ALERT:
            return {...state, alertModel:false,}

        case ADD_ALARM:
            return {...state, alarm: action.text}

        case REMOVE_ALARM:
            return {...state, alarm: ''}

        case DEAD_ALARM:
            return {...state, dAlarm:false}

        default:
            return state
    }
}
