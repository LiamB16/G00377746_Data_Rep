import React, { Component } from 'react';



export default class NavBar extends Component {
    render() {
        return (
            //creates navigation bar for options, style creates javascript object
            <div> 
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a href =""
                    className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-centre">pokedex
                    </a>
                    </nav>
            </div>
            //changes the color of navbar in app.css to red by using "!important" to override
            //a tag changes text to white
        )
    }
}