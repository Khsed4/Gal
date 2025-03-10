import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

class DonutChart extends Component {
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
      cutout:'90%',
      responsive: false,
      maintainAspectRatio: true,
      tooltips: { enabled: false },
      hover: { mode: null },
    };
    return (
		<div className="donught-chart" style={{ marginTop: "-10px" }}>
			<Doughnut data={data} options={options} height={220} width={220} />
		</div>
    );
  }
}

export default DonutChart;
