import React from "react";
import classes from "./totalBlock.module.css";
import Item from "./Item/Item";

class TotalBlock extends React.Component {
    render() {
        return (
            <div id={classes.totalBlock}>
                <Item header="Confirmed" count={this.props.confirmed} color="red" /><br />
                <Item header="Recovered" count={this.props.recovered} color="chartreuse" /><br />
                <Item header="Deaths" count={this.props.deaths} color="black" />
            </div>
        );
    }
}

export default TotalBlock;