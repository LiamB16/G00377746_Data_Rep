import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
    constructor() {
        super();

        this.DeletePokemon = this.DeletePokemon.bind(this);
    }
    DeletePokemon() {
        
        console.log("delete: " + this.props.pokemonIndex)
        //connects to API to delete movie from movie list
        axios.delete("http://localhost:4000/Delete" + this.props.pokemonIndex)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>select pokemon index to be deleted</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.pokemonIndex}
                            onChange={this.onChangeName}></input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='delete Pokemon'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Delete;