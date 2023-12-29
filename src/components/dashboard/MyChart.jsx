import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sample Data',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
}

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      type: 'category',
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        {/* Bar Chart */}
        <Bar options={options} data={chartData} />
      </div>
    </div>
  )
}

export default DashboardPage
