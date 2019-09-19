import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                    
                    <div className="col-xs-6 col-ms-6">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search..." 
                                    aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                <div className="input-group-append">
                                <span className="input-group-text " id="basic-addon2">Find</span>
                                </div>
                            </div>
                    </div>
                    
   
                
            </div>
        )
    }
}

export default Search
