import React from "react";
import { Link, Box, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, md: 2 }}
    >
      <Typography variant="h2" color="success" fontWeight="bold">
        AI GPT3 Clone
      </Typography>
      <Link href="/register" p={1}>
        Sign up
      </Link>
      <Link href="/login" p={1}>
        Sign In
      </Link>
    </Box>
  );
};

export default Navbar;
