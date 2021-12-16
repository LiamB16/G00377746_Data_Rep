import React, { Component } from 'react';
import axios from 'axios';

class Add extends React.Component{
    constructor() {
        super();
            //Constructor variables are created and binded to this.on variable to api variable names
            this.onSubmit = this.onSubmit.bind(this);
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeURL = this.onChangeURL.bind(this);
            
    
            this.state = {
                Name: "",
                ImageUrl: ""
            };
        }
        //add name of pokemon
        //adds title of movie
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    //adds year of release
    onChangeURL(e) {
        this.setState({
            ImageUrl: e.target.value
        });
    }
    //Saves changes added to database
    onSubmit(e) {
        e.prevntDefault();
        alert("pokemon: " + this.state.Name
        + " " + this.state.ImageUrl + " ")
        
        const newPokemon = {
            name: this.state.Name,
            imageUrl: this.state.ImageUrl
        }
        //adds data to json
        axios.post('http://localhost:4000/Add', newPokemon)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>

                    <div className="form-group">
                        <label>Add pokemon image url</label>
                        <input type='text' 
                        className = 'form-control'
                        value={this.state.ImageUrl}
                        onChange={this.onChangeURL}></input>
                    </div>

                   
                    <div className="form-group">
                        <input type='submit'
                            value='Add Pokemon'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Add;