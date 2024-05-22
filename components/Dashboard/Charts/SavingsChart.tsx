'use client';
import '../../../app/globals.css';
import React from 'react';
import Chart from 'react-apexcharts';

const SavingsChart = () => {
  const [options, setOptions] = React.useState({
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002]
    }
  });

  const [series, setSeries] = React.useState([
    {
      name: 'series-1',
      data: [3000, 4000, 4500, 5000, 4900, 600, 7000, 910, 4000, 4005, 5000, 2000]
    }
  ]);

  return (
    <div className="app border-4 rounded-md">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default SavingsChart;
