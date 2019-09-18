import React, { Component } from 'react'

export class TaskItem extends Component {
    changeStatus = () =>{
        this.props.changeStatus(this.props.task.id);
        //console.log(this.props.task.id);
    }

    deleteTask = () =>{
        this.props.deleteTask(this.props.task.id);
    }
    changeTask = () => {
        this.props.changeTask(this.props.task.id);
    }
    render() {
        var {task , index }=this.props;
        return (
            
                <tr>
                            
                            <td>{index+1}</td>
                            <td>{task.name}</td>
                            <td className="text-center">
                                <span 
                                className={task.status===true ? " badge badge-success" : " badge badge-danger"}
                                onClick={this.changeStatus}
                                >
                                {task.status===true ? "active" : "hidden" }</span>
                            </td>
                            <td className="text-center">
                                <div className="btn-group" role="group" aria-label="">
                                    <button type="button"
                                            className="btn btn-warning"
                                            onClick={this.changeTask}
                                    >Change
                                    </button> 
                                    
                                    <button type="button" className="btn btn-danger" 
                                    onClick={this.deleteTask}
                                    >Delete</button>
                                    
                                </div>

                            </td>
                </tr> 
            
        )
    }
}

export default TaskItem
