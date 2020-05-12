import React from "react";
import classes from "./search.module.css";

class Search extends React.Component {

    onChangeHandler = (event) => {
        this.props.onChangeHandler(event.target.value);
    }

    render() {
        return <input type="search"
            className={classes.search}
            placeholder="Find Place"
            value={this.props.searchValue}
            onChange={this.onChangeHandler} />
    }
}

export default Search;