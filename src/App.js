import { useEffect, useState } from "react";
import Button from "./components/button";
import Gifs from "./components/gifs";
import Input from "./components/Input";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setSearchTerm(search);
  };

  return (
    <div className="container">
      <div className="search-container">
        <Input
          value={search}
          onChange={handleChange}
          placeholder="Search for gifs"
        />
        <Button onClick={handleClick}>Search</Button>
      </div>
      <Gifs searchTerm={searchTerm} />
    </div>
  );
}
