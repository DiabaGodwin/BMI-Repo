'use client';
import { ApexOptions } from 'apexcharts';
import '../../../app/globals.css';
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ReactApexChart component with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LoanDataChart = () => {
  const [options, setOptions] = React.useState<ApexOptions>({
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Loans Granted Monthly',
    },
    yaxis: {
      stepSize: 20,
    },
    xaxis: {
      categories: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20, 80, 50, 30, 40, 100, 20],
    },
  ]);

  return (
    <div className="app rounded-md">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radar" height={400} />
      </div>
    </div>
  );
};

export default LoanDataChart;
