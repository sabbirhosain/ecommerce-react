// https://jsonplaceholder.typicode.com/posts/

import axios from "axios";
import { useEffect, useState } from "react";

const Fetch = () => {

  //==========>> Fetch Api Use (.then .catch) <<================
  const [data, setData] = useState();
  const [error, setError] = useState();

  const Fetch = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => setError(error))
  }

  useEffect(() => {
    Fetch();
  }, []);





  //==========>> Fetch Api Use (try catch) <<================
  const [data1, setData1] = useState();
  const [error1, setError1] = useState();

  const Fetch1 = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const result = await data.json();
      setData1(result);
    } catch (error) {
      setError1(error.massage);
    }
  }

  useEffect(() => {
    Fetch1();
  }, []);





  //==========>> Fetch Api Use (axios) <<================
  const [data2, setData2] = useState();
  const [error2, setError2] = useState();

  const Fetch2 = async () => {
    try {
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      setData2(data.data);
    } catch (error) {
      setError2(error.massage);
    }
  }

  useEffect(() => {
    Fetch2();
  }, []);

















  return (
    <>

      {/* {data.map(item => (
        <div key={item.id}>{item.id}</div>
      ))} */}

    </>
  )
}

export default Fetch