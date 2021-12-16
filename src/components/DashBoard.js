import React, {Component } from 'react'
import Pokemon from './Pokemon'

export default class DashBoard extends Component{
    //intended to create the rows and columns for the pokemon cards
    render(){    
    return (
        <div className="row">
         <div className="col">
             <Pokemon/>
         </div>
        </div>
    )
    }
}