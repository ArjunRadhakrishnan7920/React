import React, { Component } from 'react'
import Axios from "axios"
import ContactCardcopy from './ContactCard copy'
import ContactListcopy from "./ContactList copy"

class ContactAppcopy extends Component {
  constructor(props){
    super(props);
    this.state={
      contacts:null,
      selectedContact:null,
      errmessage:null
    }

  }

  pullData=(contact)=>{
    this.setState({
      selectedContact:contact,
    })
  }

  componentDidMount(){
    Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    ).then((response)=>{
      this.setState({contacts:response.data})
    })
    .catch((err)=>{
      this.setState({
        errmessage:err,
      })
    })

  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
          <div className="col-md-9">
              <ContactListcopy 
              contactData={this.state.contacts}
              pullData={this.pullData}/>

            </div>
            <div className="col-md-3">
              <ContactCardcopy selectedContact={this.state.selectedContact}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactAppcopy
