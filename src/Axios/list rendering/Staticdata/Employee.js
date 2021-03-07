import React, { Component } from 'react'
import {employeeData, EmployeeData} from "./EmployeeData"; 
class Employee extends Component {
    constructor(props){
        super(props);
        this.state={
            employees:employeeData,
        }
    }
    render() {
        
        return (
            <>
                <div className="container">
                   <div className="row">
                       <div className="col">
                           <p className="h3">Employee List</p>
                           <p>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                           </p>
                       </div>
                    </div> 
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Employee Name</th>
                                        <th>Image</th>
                                        <th>Employee Age</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employees.map((employees)=>{
                                        return(
                                            <tr>
                                                <td>
                                                    {employees.login.uuid.substr(employees.login.uuid.length-12)}
                                                </td>
                                                <td>{employees.name.last}</td>
                                                <td>
                                                    <img src={employees.picture.medium}
                                                    width="70px"
                                                    height="70px"/>
                                                </td>
                                                <td>{employees.dob.age}</td>
                                                <td>{employees.gender}</td>
                                                <td>{employees.email}</td>
                                                <td>{employees.location.city}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Employee
