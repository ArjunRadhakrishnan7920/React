import React, { Component } from 'react'

class ContactCardcopy extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        <h1>Contact Card</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <img src={this.props.selectedContact.picture.medium}/>
                </div>
                <div className="card-body">
                <ul className="list-group">
                      <li className="list-group-item">
                        {this.props.selectedContact.name.last}
                      </li>
                      <li className="list-group-item">
                        {this.props.selectedContact.email}
                      </li>
                      <li className="list-group-item">
                        {this.props.selectedContact.gender}
                      </li>
                      
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactCardcopy
