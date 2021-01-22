import React, { Component } from 'react'

import { connect } from "react-redux";

import {Button,Icon,Input} from "semantic-ui-react"
import {ChangeColor}from "./Redux/action"
import "./App.css"

export class App extends Component {
    state={
theme:"black",
firstColor:"#4880EC",

    }
     Getcolor=()=>{
        this.props.ChangeColor(this.state.theme);
    }
    
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


    render() {
      
       
        return (
            <div style ={{width:"100%",height:"100vh",backgroundImage: `linear-gradient(to right, ${this.state.firstColor} , ${this.props.color})`}}>
                
                <h1 style ={{textAlign:"center",marginLeft:"52px",fontSize:"5em",color: `white`}}><Icon name="paint brush"></Icon>Theme Changer </h1>
                <div className="Button">
                <Input onChange={this.handleChange}
                  fluid
               
                  name="theme"
                  icon="paint brush"
                  iconPosition="left" focus placeholder='Enter Color' />

            <Button  style={{marginTop:"6px"}} onClick={this.Getcolor}>Change Theme</Button></div>
                
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { color: state.color };
  };

  const mapDispatchToProps = dispatch => {
    return { ChangeColor:(theme)=>dispatch(ChangeColor(theme)) };
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(App);
