import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'bleu',
            data: data.values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default RadarChart;
