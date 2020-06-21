import React, { useRef, useEffect, useState, useContext } from "react";

import Chart from "chart.js";
import { StateContext } from "../App";

const ChartPart = () => {
  let chartEl = useRef(null);
  const state = useContext(StateContext);
  const data = state.data;

  const [chart, setChart] = useState();

  useEffect(() => {
    let chart = new Chart(chartEl.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(43, 212, 219,0.8)",
              "rgba(12, 17, 66, 0.2)",
              "rgba(230, 149, 0, 0.4)",
              "rgba(0,0,128,0.5)",
              "rgba(117, 5, 117,0.1)",
            ],
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"],
      },
    });
    setChart(chart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chart) {
      chart.data.datasets[0].data = data;
      chart.update();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <canvas ref={chartEl} />;
};

export default ChartPart;
