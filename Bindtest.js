import React, { Component } from 'react'

export class Bindtest extends Component {
   state={
       msg:"Hello"

   }
   changeMsg=(value)=>{
       this.setState({msg:value})
   }
   
    render() {
        
        return (
            <>
              <div className="container mt-5">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="card">
                              <div className="card-header">
                                  <h4>Message:{this.state.msg}</h4>

                              </div>
                              <div className="card-body">
                                  <button className="btn btn-primary mr-3" onClick={this.changeMsg.bind(this,"GM")}>GM</button>
                                  <button className="btn btn-success mr-3" onClick={this.changeMsg.bind(this,"GA")}>GA</button>
                                  <button className="btn btn-danger mr-3" onClick={this.changeMsg.bind(this,"GN")}>GN</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
              

            </>
        )
    }
}

export default Bindtest
