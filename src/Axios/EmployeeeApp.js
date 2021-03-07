import React, { Component, Fragment } from "react";
import Axios from "axios";

export class EmployeeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      errmessage: null,
      obj: null,
    };
  }
  componentDidMount() {
    const EmpURL ="https://jsonplaceholder.typicode.com/users";
     
    Axios.get(EmpURL)
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data,
          obj: response,
        });
      })
      .catch((err) => {
        this.setState({
          errmessage: err,
        });
      });
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3"> Employee List</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-striped ">
                <thead>
                  <tr>
                    <th>Id</th>
                  
                    
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.length === 0 ? (
                    ""
                  ) : (
                    <>
                      {this.state.employees.map((employee) => {
                        return (
                          <tr>
                            <td>
                              {employee.id}
                               
                              
                            </td>
                            <td>{employee.name}</td>
                            
                            <td>{employee.username}</td>
                            
                            <td>{employee.email}</td>
                            <td>{employee.address.city}</td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
              <hr />
              {JSON.stringify(this.state.obj)}
              <hr />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EmployeeApp;