import SelectYear from '../SelectYear';
import ShowCharts from '../ShowCharts';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Main() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios('http://localhost:8000/api/v1/infilation');
    const result = response.data;
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data[0]?.month?.map(item => item.month_inflation_value));
  // console.log(data[0]?.month?.map(item => item.year_inflation_value));
  const initialChartValues = {
    options: {
      chart: {
        type: 'bar',
      },
      xaxis: {
        // categories: data[0]?.month?.map(item => item.month_name),
        categories: [
          'OCAK',
          'ŞUBAT',
          'MART',
          'NİSAN',
          'MAYIS',
          'HAZİRAN',
          'TEMMUZ',
          'AĞUSTOS',
          'EYLÜL',
          'EKİM',
          'KASIM',
          'ARALIK',
        ],
      },
    },
    series: [
      {
        name: 'Aylık Enflasyon',
        // data: data[0]?.month?.map(item => item.month_inflation_value),
        data: [
          -0.05, 0.43, 0.92, 1.21, 0.5, -0.24, -0.73, 0.02, 1.03, 1.81, 1.95,
          0.22,
        ],
      },
    ],
  };
  const initialSplineChartValues = {
    options: {
      chart: {
        type: 'area',
      },
      xaxis: {
        categories: [
          'OCAK',
          'ŞUBAT',
          'MART',
          'NİSAN',
          'MAYIS',
          'HAZİRAN',
          'TEMMUZ',
          'AĞUSTOS',
          'EYLÜL',
          'EKİM',
          'KASIM',
          'ARALIK',
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
    },
    series: [
      {
        name: 'Aylık Enflasyon oranı',
        data: [
          -0.05, 0.43, 0.92, 1.21, 0.5, -0.24, -0.73, 0.02, 1.03, 1.81, 1.95,
          0.22,
        ],
      },
      {
        name: 'Yıllık enflasyon oranı',
        data: [
          9.37, 10.16, 10.86, 10.72, 9.23, 8.6, 6.9, 7.39, 7.12, 7.7, 8.4, 8.39,
        ],
      },
    ],
  };
  const initialMonthValues = {
    year: 2005,
    month_name: 'OCAK',
    month_number: 1,
  };
  const [chartoptions, setChartoptions] = useState(initialChartValues);
  const [splinechartsOptions, setSplinechartsOptions] = useState(
    initialSplineChartValues,
  );
  const [monthValues, setMonthValues] = useState(initialMonthValues);

  return (
    <div className="container">
      <div className="input-container">
        <SelectYear
          data={data}
          setChartoptions={setChartoptions}
          setSplinechartsOptions={setSplinechartsOptions}
          setMonthValues={setMonthValues}
        />
      </div>
      <div className="charts-container">
        {data[0] !== undefined ? (
          <ShowCharts
            chartoptions={chartoptions}
            monthValues={monthValues}
            splinechartsOptions={splinechartsOptions}
          />
        ) : (
          <div>
            <br /> LOADING ...
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
