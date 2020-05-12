import React from "react";
import classes from "./countriesBlock.module.css";
import Search from "./Search/Search";
import Item from "./Item/Item";

class CountriesBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };
    }

    onChangeHandler = (searchValue) => {
        this.setState({
            searchValue
        });
    }

    render() {
        let countries = this.props.countries.map(item => {
            if(this.state.searchValue === "") return item;

            let regex = new RegExp(this.state.searchValue, "i");

            if(regex.test(item.combinedKey)) return item;

            return false;
        });

        
        return (
            <div id={classes.countriesBlock} className="clearfix">
                <Search onChangeHandler={this.onChangeHandler.bind(this)} searchValue={this.state.searchValue} />
                <table>
                    <thead>
                        <tr>
                            <th className={classes.place}>Place</th>
                            <th className={classes.confirmed}>Confirmed</th>
                            <th className={classes.recovered}>Recovered</th>
                            <th className={classes.active}>Active</th>
                            <th className={classes.deaths}>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((item, index) => {
                            return item !== false ? <Item country={item.combinedKey}
                            confirmed={item.confirmed}
                            recovered={item.recovered}
                            active={item.active}
                            deaths={item.deaths}
                            key={index} /> : false;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CountriesBlock;