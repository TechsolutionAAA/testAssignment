import React from 'react';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [70, 70, 70, 50, 50, 50],
      backgroundColor: [
        '#70B0FF',
        '#6090FF',
        '#A9FFBB',
        '#004AFE',
        '#C5A4FF',
        '#FEBD42',
      ],
      borderWidth: 0,
    },
  ],
};

export function CircleChart() {
  return <Doughnut data={data} options={{cutout: '80%'}}/>;
}
