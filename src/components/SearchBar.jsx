import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [currentText, setCurrentText] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    if (currentText) {
      navigate(`/search/${currentText}`);
      setCurrentText("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={submitSearch}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 25,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxshadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
