import React, { useState, useEffect, useRef } from "react";                      // first, we import useRef from react

function App() {
  const [data, setData] = useState([]);

  const [enteredFilter, setEnteredFilter] = useState("");

  const inputRef = useRef();                                                     // second, we initialize a variable by useRef

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    let responseData = await response.json();
    let filteredData = responseData.filter(item => {
      return item.name.includes(enteredFilter);
    });
    setData(filteredData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {                                             // third, we create a setTimeout function to wrap
      if (enteredFilter === inputRef.current.value) {                            // fourth,  an if block to check and validate
        fetchData();
      }
    }, 500);                                                                     // fifth, desired timeout amount
  }, [enteredFilter, inputRef]);

  return (
    <div>
      <input
        ref={inputRef}                                                           // sixth, assigning the special ref prop to previously initialized inputRef
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
