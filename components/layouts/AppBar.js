import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AppIcon from "@/public/images/icon.webp";
import Image from "next/image";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useRouter } from "next/navigation";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import InfoIcon from "@mui/icons-material/Info";

const pages = [
  { text: "مسألة جديدة", path: "/issue", icon: <CalculateIcon /> },
  { text: "دليل المواريث", path: "/reference", icon: <AutoStoriesIcon /> },
  { text: "عن التطبيق", path: "/about", icon: <InfoIcon /> },
];

function ResponsiveAppBar() {
  // Variables:
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavLinkClick = (path) => {
    setAnchorElNav(null);
    router.push(path);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <AppBar position="relative" className="glass-background">
          <Toolbar>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Image src={AppIcon} alt="App Icon" width={80} />
              <Button
                variant="text"
                onClick={() => router.push("/")}
                size="large"
                sx={{ textShadow: "2px 2px #000" }}
              >
                الميراث
              </Button>
            </Box>

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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.text}
                    onClick={() => handleNavLinkClick(page.path)}
                  >
                    <IconButton color="primary">{page.icon}</IconButton>
                    <Typography color="primary" textAlign="center">
                      {page.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Image src={AppIcon} alt="App Icon" width={40} />
              <Button
                variant="text"
                onClick={() => router.push("/")}
                sx={{ mr: 12, textShadow: "2px 2px #000" }}
              >
                الميراث
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.text}
                  onClick={() => handleNavLinkClick(page.path)}
                  sx={{ color: "primary" }}
                  startIcon={page.icon}
                >
                  <Typography sx={{ textShadow: "2px 2px #000" }}>
                    {page.text}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
export default ResponsiveAppBar;
