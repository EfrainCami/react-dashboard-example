import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { DashboardGrid } from "./components/DashboardGrid";
import { styled } from "styled-components";
import { DoughnutChart } from "./components/DoughnutChart";
import { RadarChart } from "./components/RadarChart";
import { PolarChart } from "./components/PolarChart";
import { AreaChart } from "./components/AreaChart";
import { StackedBarChart } from "./components/StackedBarChart";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Banner>
        <h1>Dashboard Example</h1>
        <h2>By: Efraín Arenas</h2>
      </Banner>
      <DashboardGrid
        div1={<StackedBarChart />}
        div2={<LineChart />}
        div3={<RadarChart />}
        div4={<DoughnutChart />}
        div5={<AreaChart />}
        div6={<BarChart />}
      />
    </>
  );
}

export default App;
