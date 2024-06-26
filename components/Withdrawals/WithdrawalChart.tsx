'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import the ReactApexChart component with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const WithdrawalChart =()=>{
  const [options, setOptions] = React.useState<ApexOptions>({
    chart: {
      height: 350,
      width: 1000,
      type: 'line',
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
      text: 'Withdrawal Trends by Month',
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
      name: "Withdrawal",
      data: [110, 141, 1035, 451, 549, 762, 169, 691, 1248]
    }
  ]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={350} width={'100%'} style={{border:'2px soild'}}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default WithdrawalChart;