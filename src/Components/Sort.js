import React, { Component } from 'react'


export class Sort extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-6 col-ms-6">
                          <select className="form-control" name="" >
                            <option>A-Z</option>
                            <option>Z-A</option>
                            <option>Show Active</option>
                            <option>Show Hidden</option>
                          </select>
                </div>
            </div>
        )
    }
}

export default Sort
