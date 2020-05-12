import React from "react";
import classes from "./item.module.css";

class Item extends React.Component {
    render() {
        return (
            <tr>
                <td className={classes.country}>{this.props.country}</td>
                <td className={classes.confirmed}>{this.props.confirmed}</td>
                <td className={classes.recovered}>{this.props.recovered}</td>
                <td className={classes.active}>{this.props.active}</td>
                <td className={classes.deaths}>{this.props.deaths}</td>
            </tr>
        );
    }
}

export default Item;