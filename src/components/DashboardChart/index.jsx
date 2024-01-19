import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};

const labels = ["1", "2", "3", "4", "5"];

const DashboardChart = () => {
  const theme = useTheme();
  const data = {
    labels,
    datasets: [
      {
        data: [1600, 1300, 300, 800, 1200],
        backgroundColor: theme.palette.primary.main,
      },
      {
        data: [1000, 1000, 500, 1300, 1400],
        backgroundColor: theme.palette.secondary.main,
      },
    ],
  };
  return (
    <Card variant="outlined">
      <div style={{ padding: "2.5rem" }}>
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};

export default DashboardChart;
