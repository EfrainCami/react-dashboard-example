// Dashboard.js
import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip
);

const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	min-height: 100vh;
`;

const Header = styled.h1`
	font-size: 2rem;
	color: #333;
	margin-bottom: 20px;
`;

const ChartContainer = styled.div`
	width: 80%;
	max-width: 600px;
	background-color: #fff;
	padding: 20px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	padding: 20px;
	border-radius: 10px;
	margin-bottom: 20px;
`;

const Dashboard = () => {
	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
		],
		datasets: [
			{
				label: 'Sales',
				data: [5, 10, 30, 28, 64, 60, 100],
				borderColor: 'rgba(75,192,192,1)',
				backgroundColor: 'rgb(255, 255, 255)',
				pointBackgroundColor: 'rgba(75,192,192,1)',
				pointBorderColor: '#fff',
				fill: true,
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			tooltip: {
				enabled: true, // Ensure tooltips are enabled
				callbacks: {
					label: function (context) {
						const value = context.raw; // Get the value of the data point
						return `Sales: ${value}`;
					},
				},
			},
			legend: {
				display: true,
				position: 'top',
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				grid: {
					color: '#f0f0f0',
				},
			},
		},
	};

	return (
		<div>
			<DashboardContainer>
				<Header>Dashboard</Header>
				<ChartContainer>
					<Line
						data={data}
						options={options}
					/>
				</ChartContainer>
			</DashboardContainer>
		</div>
	);
};

export default Dashboard;
