import {ADD_REMINDER, DELETE_REMINDER, REMOVE_REMINDER} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) =>{
    let {text,dueDate} = action;
    return{
        text,
        dueDate,
        id: Math.random(),
    }
}
const removeById = (state=[] , id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log("new reduced reminder",reminders)
    return reminders;

}
const reminders = (state=[], action) =>{
    state = read_cookie("reminders")
    let reminders = null;
    switch(action.type){
        case ADD_REMINDER:
            reminders = [... state, reminder(action)];
            bake_cookie("reminders", reminders);
            console.log("reminder as state", reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state,action.id)
            bake_cookie("reminders", reminders);
            console.log("deleted  reminder as state", reminders);
            return reminders;
        case REMOVE_REMINDER:
            reminders=[];
            bake_cookie("reminders", reminders);
            console.log("deleted all reminders as state",reminders)
            return reminders;
        default:
            return state;
    }
}
export default reminders;