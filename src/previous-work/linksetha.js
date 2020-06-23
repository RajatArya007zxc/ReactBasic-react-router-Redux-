import React, { useState, useEffect, useRef } from "react";

function App() {
  const [data, setData] = useState([]);
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    let responseData = await response.json();
    let filteredData = responseData.filter(item => {
      return item.name.includes(enteredFilter);
    });
    setData(filteredData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current.value && enteredFilter === inputRef.current.value) {  // first, here we are making sure that fetching will only occur after typing
        fetchData();
        console.log(
          "I am the first useEffect Hook in the same functional Component that will fetch data only after 500ms the last key stroke"
        );
      }
    }, 500);
    return () => {                                                               // second, we return an anonymous clean up function
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef]);                                                 // third, there we will our dependency array for our dependencies.

  useEffect(() => {                                                              // fourth, we create another useEffect Hook for only initially fetching data
    fetchData();
    console.log(
      "I am the second useEffect Hook in the same functional Component that will fetch data immediatly upon mounting"
    );
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Search Names"
        value={enteredFilter}
        onChange={e => setEnteredFilter(e.target.value)}
      />
      <ul>
        {data.map(el => (
          <li key={el.id}>
            <h3>{el.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;