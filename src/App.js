import React, { Component } from 'react';
import logo from './logo.svg';
//import logo from './landingpage_background.jpeg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class App extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }

  constructor(props){
    super(props);
    this.state={
      error:null,
      items: [],
      isloaded:false,
    }
  }


  async componentDidMount(){
   // this.fetchData();
   const url="https://api.randomuser.me/";
  //const url="https://jodacare-assignment.herokuapp.com/api/messages";
  const response= await fetch(url);
  const data= await response.json();
  console.log(data);

  }




  render() {

      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to JodaCare {this.props.user.username}</h2>
            <h2>Please come back later</h2>
          </div>
          <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
          </p>
        </div>
      );
    }


}


export default withAuth(App);
