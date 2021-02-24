import React, { Component } from 'react'

class Psaform extends Component {
    state={
        mobile:"",
    };

    mobileHandler=(e)=>{
        console.log(e.target.value)
        this.setState({mobile:e.target.value})
    }

    sendOtp=(e)=>{
        console.log(this.state);
        alert(`${this.state.mobile}`)
        e.preventDefault();
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h2">Enter Your Mobile Number</p>
                                    <p className="h6" className="text-center">Provide a phone number to continue</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Enter your number" onChange={this.mobileHandler}/>
                                        </div><br/>
                                        <button  className="btn btn-success" onClick={this.sendOtp}>Send OTP</button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Psaform
