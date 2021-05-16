import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";

export default function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="cards">
      {items.map((i) => (
        <CharacterItem key={i.char_id} item={i}></CharacterItem>
      ))}
    </div>
  );
}
