import React from 'react';

import HistoricalData from './HistoricalData.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentData: null,
			historicalData: null
		}
	}

	componentDidMount() {
		// GET currentData
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then( response => response.json() )
		.then( response => {
			this.setState({
				currentData: response.bpi
			})
		})
		.catch( error => console.log(error) );

		// GET historicalData
		fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
		.then( response => response.json() )
		.then( response => {
			this.setState({
				historicalData: response.bpi
			})
		})
		.catch( error => console.log(error) );
	}

	renderLoading() {
		return <div>Loading...</div>;
	}

	renderView() {
		return (
			<React.Fragment>
				<p>{JSON.stringify(this.state.currentData)}</p>
				<HistoricalData data={this.state.historicalData} />
				<Footer />
			</React.Fragment>
		);
	}

	render() {
		if ( this.state.currentData === null || this.state.historicalData === null ) {
			return this.renderLoading();
		} else {
			return this.renderView();
		}
  }
}
