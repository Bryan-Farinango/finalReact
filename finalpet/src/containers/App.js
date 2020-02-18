import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import UserForm from "../components/UserForm";
import EventsForm from "../components/EventsForm";

import 'antd/dist/antd.css';
import Routes from "../Routes";
import Navbar from "./navbar";


class App extends React.Component {


  state = {
    tasks: [],
    tasksList: [],


  };




  render(){

    const { tasks, tasksList} = this.state;
    return (


        <div>
          <Navbar/>
         <Routes/>


        </div>
    );
  }

}

export default App;
