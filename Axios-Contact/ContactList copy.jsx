import React, { Component } from 'react'

class ContactListcopy extends Component {
  pushData=(contact)=>{
    this.props.pullData(contact);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contactData!=null ?(
                    <>
                    {this.props.contactData.map((contact)=>{
                      
                      return(
                        
                         <tr onClick={this.pushData.bind(this,contact)}>
                        
                          
                          <td>{contact.login.uuid}</td>
                          <td>{contact.name.last}</td>
                          <td>{contact.dob.age}</td>
                          <td>{contact.email}</td>
                        </tr>
                      )
                    })}
                    </>
                  ):null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactListcopy
