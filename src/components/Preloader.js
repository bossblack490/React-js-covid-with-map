import React from "react";
import classes from "./preloader.module.css";

class Preloader extends React.Component {
    render() {
        return (
            <div className={classes.cssload_loader}>
                <div className={`${classes.cssload_inner} ${classes.cssload_one}`}></div>
                <div className={`${classes.cssload_inner} ${classes.cssload_two}`}></div>
                <div className={`${classes.cssload_inner} ${classes.cssload_three}`}></div>
            </div>
        );
    }
}

export default Preloader;