import { ADD_REMINDER, DELETE_REMINDER, REMOVE_REMINDER } from '../constants';

export const addReminder = (text, dueDate) =>{
    const action ={
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log("this is the action call:", action)
    return action;
}
export const deleteReminder = (id) =>{
    const action={
        type: DELETE_REMINDER,
        id
    }
    console.log("this is the reminder deletion",action);
    return action;
}
export const removeReminders = () => {
    const action={
        type:REMOVE_REMINDER
    }
    console.log("delete all reminders", action)
    return action;
}