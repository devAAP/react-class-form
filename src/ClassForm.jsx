import React from 'react';


class ClassForm extends React.Component {
    constructor(){
      super();
      this.state = { name:'', email: '', password: ''};
    };
    
    handleNameChange = (event) => {
      this.setState({name: event.target.value});
    }
    handleEmailChange = (event) => {
     this.setState({email: event.target.value});
    }
  
    handlePasswordChange = (event) => {
      this.setState({password: event.target.value});
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.name, this.state.email, this.state.password);
    }
    render(){
        return (
          <form>
              <h2 className= 'text-center'>This is a simple Sign In Form</h2>
             
             <div className = 'form-group'>
            <label>Name</label>
            <input type= 'name' className="form-control" placeholder="Full Name"
              value = {this.state.name} onChange = {this.handleNameChange} />
              </div>
               <br></br>
            <div className = 'form-group'>
                <label>Email</label>   
            <input type= 'email' className="form-control" placeholder="Email address"
              value = {this.state.email} onChange = {this.handleEmailChange} /> 
              </div>
              <br></br>
              <div className = 'form-group'>
                  <label>Password</label>
          <input type = 'password' className="form-control" placeholder="Password"
          value = {this.state.password} onChange = {this.handlePasswordChange} />
          </div>
           <br></br>
          <button type = 'submit' value='Submit' className="btn btn-primary btn-block">Submit</button>
            </form>
            
        );
    };
};

export default ClassForm;