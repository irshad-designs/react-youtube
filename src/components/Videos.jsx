import { Box, Stack } from "@mui/system";
import ChannelCards from "./ChannelCards";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos === null
        ? videos
        : videos.map((itm, index) => {
            return (
              <Box key={index}>
                {itm.id.videoId && <VideoCard video={itm} />}
                {itm.id.channelId && <ChannelCards channelDetail={itm} />}
              </Box>
            );
          })}
    </Stack>
  );
};

export default Videos;
