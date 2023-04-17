// Hooks
import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState();

    
    // useEffect(() => {
    //   const dataFetch = async () => {
    //     const data = await (
    //       await fetch(
    //         `http://localhost:3000/api${url}`
    //       )
    //     ).json();
  
    //     setData(data);
    //   };
  
    //   dataFetch();
    // }, []);

    useEffect(() => {
      async function fetchData() {
        const res = await fetch(`http://localhost:3000/api${url}`);
        const jsonData = await res.json();
        setData(jsonData.response);
      }
      fetchData();
    }, []);

    return data;
}

export default useFetch