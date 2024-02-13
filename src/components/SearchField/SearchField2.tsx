import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchField2.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchField2: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Add a debounce function or API call for more complex scenarios
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  return (
    <div className="search-div">
      <input
        className="search-field"
        type="text"
        id="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search"
      />
      <i className="search-icon">
        <SearchIcon />
      </i>
    </div>
  );
};

export default SearchField2;
