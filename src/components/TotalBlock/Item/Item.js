import React from "react";
import classes from "./item.module.css";

class Item extends React.Component {
    render() {
        return (
            <div className={classes.item}>
                <h4>Total {this.props.header}</h4><br />
                <h2 style={{color: this.props.color}} className={classes.count}>{this.props.count}</h2>
            </div>
        );
    }
}

export default Item;