import React from "react";
import DateRange from "../components/DateRange";
import BarChartGraph from "../components/BarChartGraph";
import LineChartGraph from "../components/LineChartGraph";
import AverageProgressBar from "../components/AverageProgressBar";
import SelectKids from "../components/SelectKids";

const Progress = () => {
  return (
    <>
    <div className="flex justify-between items-center mt-10 mx-10 mb-20">
    <DateRange />
    <SelectKids page='progress' />
    </div>
    <div className="w-full h-2/4 flex justify-between">
    <BarChartGraph />
    <AverageProgressBar />
    </div>
    <LineChartGraph />
    </>
  );
};

export default Progress;
