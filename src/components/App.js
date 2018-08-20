import React,{Component} from 'react';
import {connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { deleteReminder, removeReminders } from '../action'; 
import { addReminder } from '../action'; 
import moment from 'moment';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
            dueDate:"",
        }
    }
    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    addReminders(){
        console.log("this.state.dueDate",this.state.dueDate);
        this.props.addReminder(this.state.text,this.state.dueDate);
    }
    removeReminder(){
        this.props.removeReminders();
    }

    renderReminders(){
        const {reminders} = this.props;
        console.log("these are the reminders", reminders);
        return(
            <ul className=" list-group col-sm-4 ">
            {
                reminders.map(reminder => {
                    return(
                        <li key={reminder.id} className="list-group item">
                            <div className="list-item">
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
                            </div>
                            <div 
                            className="list-item delete-button"
                            onClick={() => this.deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
    render(){
        console.log("this.props", this.props)
        return(
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                        <div className="form-group">
                            <input 
                            className="form-control" 
                            placeholder="I have to..."
                            onChange={(e) => this.setState({
                                                text: e.target.value
                                            })}
                            />
                            <input className="form-control"
                                    type="datetime-local"
                                    onChange={
                                        (e) => this.setState({
                                            dueDate: e.target.value
                                        })
                                    }
                            />

                        </div>
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={this.addReminders.bind(this)}
                            >
                                Add Reminder
                        </button>
                        { this.renderReminders()}
                </div>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.removeReminder.bind(this)}
                    >
                                Remove All Reminders
                </button>


            </div>

        )
    }
}
function mapStateToProps(state){
    return{
        reminders: state
    }
}
// function mapDispatcherToProps(dispatch) {
//     return bindActionCreators({addReminder}, dispatch)
// }

export default connect(mapStateToProps,{addReminder,deleteReminder, removeReminders})(App);
