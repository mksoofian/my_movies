"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import Theaters from "@mui/icons-material/Theaters";
import { useAuth } from "@/app/auth-provider";
import { useRouter } from "next/navigation";

const pages = ["Home", "WatchList", "Login"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const { user, logoutUser } = useAuth();
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickLink = (link: string) => {
    handleCloseNavMenu();
    router.push(link);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Theaters />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                const pageLink = `/${page.toLowerCase()}`;

                if (page.toLowerCase() === "login") {
                  if (user) {
                    return (
                      <MenuItem key={page} onClick={logoutUser}>
                        <Typography sx={{ textAlign: "center" }}>
                          Logout
                        </Typography>
                      </MenuItem>
                    );
                  }
                }

                if (page.toLowerCase() === "home") {
                  return (
                    <MenuItem key={page} onClick={() => handleClickLink("/")}>
                      <Typography sx={{ textAlign: "center" }}>Home</Typography>
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={page}
                    onClick={() => handleClickLink(pageLink)}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              const pageLink = `/${page.toLowerCase()}`;

              if (page.toLowerCase() === "login") {
                if (user) {
                  return (
                    <Button
                      key={page}
                      onClick={logoutUser}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Logout
                    </Button>
                  );
                }
              }

              if (page.toLowerCase() === `home`) {
                return (
                  <Button
                    key={page}
                    onClick={() => handleClickLink(`/`)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              return (
                <Button
                  key={page}
                  onClick={() => handleClickLink(pageLink)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
