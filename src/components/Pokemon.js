import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class Pokemon extends Component {
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/", //gets api of pokemon data
        pokemon: null //location of where data is saved
    };
    //loads json data for first time. async runs in the background and runs other features as well
    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });//overrides pokemon variable to data from json
    }
    render() {
        //displays the pokemon card obtained from PokemonCard
        return (
            //using ? as an if statement to say if the data is null, if not null, returns pokemon card
            <div>
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            //using the map function, links the json data to a single pokemon card. i.e one pokemon, one card
                            <PokemonCard 
                            key={pokemon.name}
                            name = {pokemon.name}
                            url = {pokemon.url}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>loading pokemon</h1>
                )}
            </div>
        );
    }
}