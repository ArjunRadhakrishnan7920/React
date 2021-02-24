import React, { Component } from 'react'

class Form extends Component {
    state={
        username:"",
        email:""
    }

    txtChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        });

    }
    btnHandler=(e)=>{
        console.log(this.state);
        e.preventDefault();
        
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col md-6">
                        <div className="card">
                        
                         <div className="card-header">
                             <label>Username </label>
                            
                             <input type="text" onChange={this.txtChange} name="username"/>
                             <div>
                                 <label>Email</label>
                                 <input type="text" onChange={this.txtChange} name="email"/>
                             </div>
                    
                         </div>
                         <div className="card-body">
                            
                             <button className="btn btn-success" onClick={this.btnHandler}>Submit</button>

                         </div>
                        <div>
                    
                        </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Form
