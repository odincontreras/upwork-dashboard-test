import { Stack } from "@mui/material";
import CardsWrapper from "./components/CardsWrapper";
import FastActionsWrapper from "./components/FastActionsWrapper";
import DashboardChart from "./components/DashboardChart";

function App() {
  return (
    <Stack gap={"2rem"}>
      <CardsWrapper />

      <FastActionsWrapper />

      <DashboardChart />
    </Stack>
  );
}

export default App;
