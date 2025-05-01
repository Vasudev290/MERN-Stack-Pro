import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: 2,
          px: 2,
          py: 4,
        }}
      >
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 20, color: "success.main", mt: 2, ml: 2 }}
            />
            <Stack p={1} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Text Summary
              </Typography>
              <Typography variant="h6">
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Parapgraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 20, color: "success.main", mt: 2, ml: 2 }}
            />
            <Stack p={1} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Parapgraph
              </Typography>
              <Typography variant="h6">
                Generate Paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box p={2}>
            <Typography
              variant="h4"
              mb={2}
              fontWeight="bold"
              
            >
              AI ChatBot Coverted
            </Typography>
            <Card
              onClick={() => navigate("/chatbot")}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: 200,
                "&:hover": {
                  border: 2,
                  boxShadow: 0,
                  borderColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <ChatRounded
                sx={{ fontSize: 20, color: "success.main", mt: 2, ml: 2 }}
              />
              <Stack p={1} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  Chatbot
                </Typography>
                <Typography variant="h6">Chat With AI Chatbot</Typography>
              </Stack>
            </Card>
          </Box>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Javascript Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 20, color: "success.main", mt: 2, ml: 2 }}
            />
            <Stack p={1} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">
                Trasnlate english to javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI SCIFI Images
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 20, color: "success.main", mt: 2, ml: 2 }}
            />
            <Stack p={1} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Scifi Image
              </Typography>
              <Typography variant="h6">Generate Scifi images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
