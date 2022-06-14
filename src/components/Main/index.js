import InputData from '../InputsData';
import Charts from '../Charts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('http://localhost:8000/api/v1/infilation');
      const result = await response.data;
      // console.log(result);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="input-container">
        <InputData />
      </div>
      <div className="charts-container">
        <Charts data={data} />
      </div>
    </div>
  );
}

export default Main;
