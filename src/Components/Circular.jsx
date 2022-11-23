// import React, { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { CDBContainer } from 'cdbreact';
// import { Chart as ChartJS } from 'chart.js/auto'

// const Chart = () => {
//   const [data] = useState({
//     labels: ['Completed', 'Pending', 'Cancelled'],
//     datasets: [
//       {
//         label: 'Completed',
//         backgroundColor: 'rgba(20, 156, 8, 1)',
//         borderColor: 'rgba(20, 156, 8, 1)',
//         data: [63.7],
//       },
//       {
//         label: 'Pending',
//         backgroundColor: 'rgba(255, 216, 9, 1)',
//         borderColor: 'rgba(255, 216, 9, 1)',
//         data: [24.5],
//       },
//       {
//         label: 'Cancelled',
//         backgroundColor: 'rgba(244, 21, 21, 1)',
//         borderColor: 'rgba(244, 21, 21, 1)',
//         data: [11.4],
//       },
//     ],
//   });

//   return (
//     <CDBContainer>
//       <h3 className="mt-5">Pie chart</h3>
//       <Pie data={data} options={{ responsive: true }} />
//     </CDBContainer>
//   );
// };

// export default Chart;
import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [" Completed 63.7% ", 
  "Pending 24.5% ",
   "Cancelled 11.4% "],
  datasets: [
    {
      data: [63.7, 24.5, 11.4],
      backgroundColor: ["#149C08", "#FFD809", "#F41515"],
      hoverBackgroundColor: ["#149C08", "#FFD809", "#F41515"],
      borderWidth: 2
    }
  ]
};
export default function App() {
  return <Doughnut data={data} />;
}