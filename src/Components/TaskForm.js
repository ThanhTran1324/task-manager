import React, { Component } from 'react'


export class TaskForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:"",
            name:"",
            status:"false"
        }
    }
    componentWillMount()
    {
        
        if(this.props.task)
        {
            this.setState({
                id:this.props.task.id,
                name:this.props.task.name,
                status:this.props.task.status
            });
            
        }
    }
    onHandleChange= (event) =>{
        var target =  event.target;
        var name = target.name;
        var value = target.value;
        console.log(value);
        if(name==="status")
            value==="true" ? value=true : value=false;  
        this.setState({
            [name]:value
        })
    }
    onCloseForm = () =>{
        this.props.onRecieveCloseTaskForm();
    }
    onSubmit = (event) =>{
        event.preventDefault();
        
        if(this.state.name==='' || this.state.status==='')
        {
            this.onClear();
            this.onCloseForm();
        }
        else
        {
            this.props.onReceive(this.state);
            this.onClear();
            this.onCloseForm();
        }
        
        //console.log(this.state);
        
       
       

    }
    onClear = () => {
        this.setState({
            name:'',
            status:false
        });
        this.onCloseForm();
    }
        
    render() {
            var {id}=this.state;
        return (
            <div >
                
                    <form className="form-group  " onSubmit={this.onSubmit}>
                      
                        <label ><h2>Task Option</h2></label><br></br>
                        <label ><h3>Name: </h3></label>
                        <input 
                                type="text" 
                                onChange={this.onHandleChange} 
                                value={this.state.name}
                                name="name"className="form-control" placeholder="" aria-describedby="helpId"></input>
                        <label><h3>Status: </h3></label>
                    <div className="form-group text-center " >
                    
                        <select className="form-control" 
                            name="status" 
                            value={this.state.status} 
                            onChange={this.onHandleChange}>

                        <option >Choose One</option>
                        <option value={false}>Hidden</option>
                        <option value={true}>Active</option>
                        
                        </select><br></br>
                        <button className="btn btn-warning" type="submit" >Save</button>
                        <button className="btn btn-danger" 
                                type="reset"
                                onClick={this.onClear}>Cancel</button>
                        
                    </div>
                    </form>
                    </div>
            
        )
    }
}

export default TaskForm
