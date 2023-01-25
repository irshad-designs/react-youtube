import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { getData } from "../utils/fetchFromApi";

import SideBar from "./SideBar";
import Videos from "./Videos";

const Feeds = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVedios] = useState([]);

  useEffect(() => {
    getData(`search?part=snippet&q=${selectedCategory}`).then((res) =>
      setVedios(res.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "2px solid #fff",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "red" }}>Video</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feeds;
