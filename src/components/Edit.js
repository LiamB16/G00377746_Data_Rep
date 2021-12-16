import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component{
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
        //establishes connection to api
    componentDidMount(){
       // console.log(this.props.match.params.);

        axios.get("http://localhost:4000/Edit" +this.props.match.params.pokemonIndex)
        .then(response =>{
            this.setState({
                pokemonIndex:response.data.pokemonIndex,
                name:response.data.Name,
                imageUrl:response.data.ImageUrl
            })
        })
        .catch((error)=>{
            console.log(error); //prints error if there is an issue with connecting to server
        });
    }
    //add name of pokemon
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    //adds imageURL to pokemon
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
            imageUrl: this.state.ImageUrl,
            pokemonIndex: this.state.pokemonIndex
        }
        //adds data to json, uses put instead of post
        axios.put('http://localhost:4000/Edit' + this.state.pokemonIndex, newPokemon)
        .then(res =>{
            console.log(res.data);
        })
        .catch();
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
                            value='edit Pokemon'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;