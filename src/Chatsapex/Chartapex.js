import React, { useState } from "react";
import Chart from "react-apexcharts";

const App = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 99, 100]
      }
    ]
  });



  return (
    <div className="app" style={{color:"green"}}>
      <div className="row">
        <div className="mixed-chart">
          <h1>Chart</h1>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
