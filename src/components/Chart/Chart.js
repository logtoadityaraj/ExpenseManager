import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  // spread operator is used to pull out all the elements from the dataPointValues array
  const totalMaxmimum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxmimum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
