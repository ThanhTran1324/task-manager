import React, { Component } from 'react'
import randomString from "randomstring";
import Search from './Components/Search';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import Sort from './Components/Sort';


export class App extends Component {
            constructor(props) {
                super(props)
                this.state = {
                     tasks:[],
                     taskEditting:[],
                     isDisplayForm:false
                }
            }
            componentWillMount(){
                if(localStorage && localStorage.getItem('tasks'))
                {
                    var tasks = JSON.parse(localStorage.getItem('tasks'));
                    this.setState({
                        tasks:tasks
                    });
                }
            }
            generateDate = () =>{
                var tasks= [
                    {
                        id: this.createID(),
                        name: "html",
                        status: true
                    },
                    {
                        id: this.createID(),
                        name: "CSS",
                        status: false
                    },
                    {
                        id: this.createID(),
                        name: "Angular",
                        status: true
                    }
                ];
                console.log(tasks);
                this.setState({
                    tasks : tasks
                });
                localStorage.setItem('tasks',JSON.stringify(tasks));
            };
            
            randomString = () => {
                var randomstring = require("randomstring");
                return randomstring.generate();
            }

            createID = () =>{
                return this.randomString()+"-"+this.randomString();
            }

            

            onReceive = (data) => {
                
                    var tasks=this.state.tasks;
                    if(data.id==="" || data.id===undefined)
                    {
                        data.id=this.createID();
                        tasks.push(data);
                    }
                    else
                    {
                        var index = this.findIndex(data.id)
                        tasks[index]=data;
                    }
                    this.setState({
                        tasks:tasks,
                        taskEditting:null
                    });
                    localStorage.setItem("tasks",JSON.stringify(tasks));
                }

            ChangeDisplay =()=>{
            
                this.setState({isDisplayForm:!this.state.isDisplayForm});
            }
        
            OnCloseTaskForm  = () => 
            {
                   this.setState({isDisplayForm:false});
            } 
            OnShowTaskForm = () => 
            {
                this.setState({isDisplayForm:true});
            }

            changeStatus =(id)=>{
                var {tasks}=this.state;
                var index=this.findIndex(id);
                if(index!==-1)
                {
                    tasks[index].status=!tasks[index].status;

                }
                this.setState({tasks:tasks});
                localStorage.setItem("tasks",JSON.stringify(tasks));
                
                
                //console.log(id);
                }
            findIndex(id)
            {
                var {tasks} = this.state;
                var result=-1;
                tasks.map((task,index) => {
                    //console.log(task[index].id);
                    if(id===task.id)
                    {
                        result=index; 
                    }
                });
                return result;
            }
            deleteTask = (id) =>
            {
                var newtasks=this.state.tasks;
                var index=this.findIndex(id);
                if(index!==-1)
                {
                    newtasks.splice(index,1);
                    this.setState({tasks:newtasks});
                    localStorage.setItem("tasks",JSON.stringify(newtasks));
                }
                this.OnCloseTaskForm();
            }

            changeTask = (id) => {

                this.OnShowTaskForm();
                var {tasks} = this.state;
                var index=this.findIndex(id);
                var taskEditting=tasks[index];
                this.setState({taskEditting:taskEditting});


            }
  render() {
           var {tasks,isDisplayForm,taskEditting} = this.state; //var tasks = this.state.tasks
           var elmTaskForm = isDisplayForm  ? 
           <TaskForm onRecieveCloseTaskForm={this.OnCloseTaskForm} 
                    task={taskEditting}
                    onReceive={this.onReceive}

            /> : ""  ;
    return (
        <div className="container border border-danger">
          <h1 className="text-center">Task Manager</h1>
          <hr></hr>
        {/** top page */}
        {/**start of page */}
        <div className="row ">
            <div className={this.state.isDisplayForm===true ? "col-xs-4 col-md-4  col-lg-4 " : ""} >
                {elmTaskForm}
            </div>
            <div className={this.state.isDisplayForm===true ? "col-xs-8 col-md-8 col-lg-8 " : "col-xs-12 col-md-12 col-lg-12"}>
                
                <p>
                    <button className="btn btn-success" type="button" onClick={this.ChangeDisplay} aria-expanded="false"
                            aria-controls="contentId">
                        Add
                    </button>
                    <button className="btn btn-danger ml-3" onClick={this.generateDate} type="button"  aria-expanded="false">
                        Generate Data
                    </button>
                </p>
                <div className="row">
                    
                        <div className="col-xs-12 col-md-6">
                            <Search />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <Sort />
                        </div> 
                    
                </div>
                
                <div className="row mt-3">
                    <Control 
                        changeStatus={this.changeStatus} 
                        tasks={tasks}
                        deleteTask={this.deleteTask}
                        changeTask={this.changeTask}
                    />
                </div>
            </div>
        </div>
            


        </div>
    )
  }
}

export default App
