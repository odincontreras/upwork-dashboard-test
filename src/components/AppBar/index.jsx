import { Avatar, Badge, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";

const AppBar = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <HomeIcon fontSize="large" />
        <Typography fontWeight={700} fontSize={24}>
          Inicio
        </Typography>
      </div>

      <Badge badgeContent={4} color="error">
        <Avatar sx={{ bgcolor: "#1A3D7D" }}>
          <NotificationsIcon />
        </Avatar>
      </Badge>
    </header>
  );
};

export default AppBar;
