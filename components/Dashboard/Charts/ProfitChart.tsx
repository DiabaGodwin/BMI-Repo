'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ProfitChart: React.FC = () => {
  const [options, setOptions] = React.useState<ApexOptions>({
    chart: {
      height: 350,
      type: 'line', // explicitly specifying type
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  });

  const [series, setSeries] = React.useState([
    {
      name: "Witdrawal",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ProfitChart;
