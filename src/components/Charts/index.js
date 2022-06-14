import React, { useState, useEffect } from 'react';

import Chart from 'react-apexcharts';

function Charts({ data }) {
  // console.log(data);
  const [infilationYears, setInfilationYears] = useState([]);
  useEffect(() => {
    const getyear = () => {
      let years = [];
      if (data != null) {
        data.forEach(item => {
          years.append(item.year);
          console.log(item.year);
        });
        setInfilationYears(years);
      }
    };
    getyear();
    console.log(data);
  }, []);
  console.log(infilationYears);
  const [charsData, setcharsData] = useState({
    options: {
      // chart: { id: 'bar' },
      xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div>
      chars
      <br />
      <Chart
        options={charsData.options}
        series={charsData.series}
        // series={data}
        type="bar"
        width="500"
      />
    </div>
  );
}
export default Charts;
