import React from 'react';
import Chart from 'chart.js';

export default class HistoricalData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	componentDidMount() {
		const ctx = document.getElementById('historicalDataChart');
		const historicalDataChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: Object.keys(this.props.data),
				datasets: [{
					data: Object.values(this.props.data)
				}]
			}
		});
	}

	render() {
    return <canvas id="historicalDataChart" width="400" height="400"></canvas>;
  }
}
