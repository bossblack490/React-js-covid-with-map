import React from "react";
import "./App.css";
import TotalBlock from "./components/TotalBlock/TotalBlock";
// import MapBlock from "./components/MapBlock/MapBlock";
import CountriesBlock from "./components/CountriesBlock/CountriesBlock";
import Axios from "axios";
import Preloader from "./components/Preloader";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		let result = {};

		Axios.get("https://covid19.mathdro.id/api").then(res => {
			const confirmed = res.data.confirmed.value;
			const recovered = res.data.recovered.value;
			const deaths = res.data.deaths.value;

			result.confirmed = confirmed;
			result.recovered = recovered;
			result.deaths = deaths;
		});

		Axios.get("https://covid19.mathdro.id/api/confirmed").then(res => {
			const countries = res.data;

			result.countries = countries;

			this.setState(result);
		});
	}

	render() {
		return (
			<div className="App">
				{
					!this.state.countries ? <Preloader /> :
						<>
							<h1>COVID-19 Dashboard</h1>
							<TotalBlock confirmed={this.state.confirmed}
								recovered={this.state.recovered}
								deaths={this.state.deaths} />
							<CountriesBlock countries={this.state.countries} />
							{/* <MapBlock countries={this.state.countries} /> */}
						</>
				}
			</div>
		);
	}
}

export default App;
