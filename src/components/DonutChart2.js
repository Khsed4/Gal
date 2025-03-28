import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

class DonutChart2 extends Component {
  render() {
    const data = {
		weight: 0,
		defaultFontFamily: "Poppins",
		datasets: [
			{
				data: [this.props.value, 100 - this.props.value],
				borderWidth: 0,
				backgroundColor: [
					this.props.backgroundColor,
					this.props.backgroundColor2,
				],
			},
		],
    };

    const options = {
      //width: 75,
      //cutoutPercentage: 50,
      cutout:'93%',
      responsive: true,
      maintainAspectRatio: true,
      tooltips: { enabled: false },
      hover: { mode: null },
    };
    return (
		<div className="donught-chart" >
			<Doughnut data={data} options={options} height={165} width={165} />
		</div>
    );
  }
}

export default DonutChart2;
