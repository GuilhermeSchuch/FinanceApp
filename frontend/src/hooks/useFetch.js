// Hooks
import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
      const dataFetch = async () => {
        setLoading(true);
        const data = await (
          await fetch(
            `http://localhost:3000/api${url}`
          )
        ).json();
  
        setData(data);
      };
  
      dataFetch();
      setLoading(false);
    }, []);

    return { data, loading };
}

export default useFetch