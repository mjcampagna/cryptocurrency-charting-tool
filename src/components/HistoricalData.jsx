import React from 'react';
import Chart from 'chart.js';

export default class HistoricalData extends React.Component {

	componentDidMount() {
		const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
		const ctx = document.getElementById('historicalDataChart');
		const labels = Object.keys(this.props.data);
		const data = Object.values(this.props.data);
		const historicalDataChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: 'The Bitcoins',
					data: data,
					backgroundColor: data.map((color) => {
						return colors[ Math.floor(Math.random() * colors.length) ];
					}),
					borderColor: data.map((color) => {
						return colors[ Math.floor(Math.random() * colors.length) ];
					}),
					borderWidth: 4
				}]
			}
		});
	}

	render() {
    return (
			<React.Fragment>
				<canvas id="historicalDataChart"></canvas>
			</React.Fragment>
		);
  }
}
