import React from 'react';

class SearchBar  extends React.Component {
    state = { term: ""};
    onInputChange=(event) => {
        this.setState({term: event.target.value})
    }
    onFormSubmit= (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form " >
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input onChange={this.onInputChange} type="text" id="search" placeholder="Search" value={this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;