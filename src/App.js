import React from 'react';

import { Route, IndexRoute } from 'react-router';

import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class App extends React.Component{
  state = {
    profiles: testData,
  };

  componentDidMount(){
    fetch("http://my-json-server.typicode.com/shawn-don-soneja/demo/posts")
    .then( res => res.json() )
    .then( (result) => { console.log(result); this.setState({profiles:result}) } );
  }

  //beg Render() --
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Test />

        <Button variant="right">
          Show Custom Styled Alert
        </Button >
        <MyTable testWord="BITCH-PROPS-BITCH-PROPS-BITCH-PROPS" profiles={this.state.profiles}/>
      </div>
    );
  }//end Render() --

}//end Class

const Test = (props) => {
  return (<div style={{marginTop:-50+'px'}}> 'Hello Bitch' </div>);
}

const MyTable = (props) => {
  return(
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{props.testWord}</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        {props.profiles.map(profile => <Row {...profile}/>)}
      </tbody>
    </Table>
    </div>
  );
}

class Row extends React.Component{
  render(){
    const profile = this.props;
    return(
      <tr>
        <td>{profile.title}</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    );
  }
}

export default App;
