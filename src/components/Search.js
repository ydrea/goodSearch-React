import { getSuggestedQuery } from "@testing-library/dom";
import React, { useState } from "react";

export default function Search({ getQuery }) {
  const [ukucaj, setUkucaj] = useState("");

  const handleChange = (q) => {
    setUkucaj(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Nadji ga"
          autoFocus
          //
          value={ukucaj}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </section>
  );
}
