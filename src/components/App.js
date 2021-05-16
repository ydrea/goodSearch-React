import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Header from "./Header";
import axios from "axios";
import CharacterGrid from "./CharacterGrid";

function App() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEm = async () => {
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(res.data);
      setItems(res.data);
      setLoading(false);
    };
    fetchEm();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={loading} items={items} />
    </div>
  );
}

export default App;
