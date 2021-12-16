import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

export default class PokemonCard extends Component {
    state ={
        name:"",
        imageUrl:"",
        imageLoading: true,
        toManyRequests: false
    };
    componentDidMount(){
        const name = this.props.name;
        const url = this.props.url;
        //gets the total number in the pokemon index
        const pokemonIndex = url.split("/")[url.split("/").length -2];
        //gets url for images of pokemon
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        this.setState({name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex})
    }
    render() {
      
        
        return (
            //Creates the pokemon card to view pokemon
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className="card">
                       <h5 className="card-header">{this.state.pokemonIndex}</h5>
                       <Sprite className="card-img-top rounded mx-auto mt-2" 
                       //image is already loaded
                        onLoad={() => this.setState({ imageLoading: false })}
                        //prevents program from crashing due to too many requests to github
                        onError={() => this.setState({ toManyRequests: true })}
                       src={this.state.imageUrl} >  
                       </Sprite>
                       <div className="card-body">
                        <h6 className = "card title">{this.state.name}</h6>
                       </div>
                </div>
            </div>
        )
    }
}