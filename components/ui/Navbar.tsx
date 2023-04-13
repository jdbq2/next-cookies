import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="white">
            CookieMaster
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Link href="/ThemeChanger" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="white">
            Cambiar Tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
