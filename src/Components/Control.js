import React, { Component } from 'react'
import TaskItem from './TaskItem'

export class Control extends Component {
   
    
    render() {
        var {tasks} = this.props;
        var elmtasks=tasks.map((tasks,index) => {
            return <TaskItem changeStatus={this.props.changeStatus} 
                            deleteTask={this.props.deleteTask}
                            key={tasks.id} index={index} task={tasks}
                            changeTask={this.props.changeTask}
                    />;
        });
        return (
            <div className="container-fluid">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td ></td>
                            <td>    
                                <input type="text" className="form-control" name=""  aria-describedby="helpId" placeholder=""></input>
                            </td>
                            <td>    
                                <select className="form-control" name="" >
                                    <option>All</option>
                                    <option>Hidden</option>
                                    <option>Active</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                            {elmtasks}
                    </tbody>
                </table> 
            </div>
        )
    }
}

export default Control
