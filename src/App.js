import React from 'react';

//import { Route, IndexRoute } from 'react-router';

import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import Plot from 'react-plotly.js';
import HexPlot from './Graphs';

class App extends React.Component{
  state = {
    profiles: [],
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

        <Test />

        <Button variant="right" onClick={() => alert('hello')}>
          Show Custom Styled Alert
        </Button >
        <MyTable testWord="test word - props" profiles={this.state.profiles}/>

        <HexPlot />
      </div>
    );
  }//end Render() --

}//end Class

const Test = (props) => {
  return (<div style={{marginTop:50+'px'}}> 'Hello Bitch' </div>);
}

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render(){
    return(
      <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{this.props.testWord}</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          {this.props.profiles.map(profile => <Row {...profile}/>)}
        </tbody>
      </Table>
      </div>
    );
  }

}

class Row extends React.Component{
  render(){
    const profile = this.props;
    return(
      <tr>
        <td>{profile.title}</td>
        <td>{profile.id}</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    );
  }
}

export default App;
