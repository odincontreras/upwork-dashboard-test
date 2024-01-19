import { Chip, Typography } from "@mui/material";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import PropTypes from "prop-types";
import AppBar from "../AppBar";
import {
  Home,
  Groups,
  LocationOn,
  LocalShipping,
  TrendingUp,
  RequestQuote,
  AddCard,
  PointOfSale,
  DataSaverOff,
  Settings,
} from "@mui/icons-material";

const AppLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#1A3D7D",
            padding: "1rem 0",
          },
          [`.${menuClasses.subMenuContent}`]: {
            backgroundColor: "#1A3D7D",
          },
          [`.${menuClasses.button}`]: {
            color: "white !important",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
          },
          [`.${menuClasses.label}`]: {
            textOverflow: "unset",
            whiteSpace: "unset",
          },
          height: "100vh",
          maxHeight: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          style={{ textAlign: "center" }}
          fontFamily="'Baloo Bhai 2', sans-serif"
          sx={{ paddingBottom: "15px" }}
        >
          Smart
          <Typography
            variant="h5"
            color="white"
            fontFamily="'Baloo Bhai 2', sans-serif"
            component={"span"}
          >
            water
          </Typography>
        </Typography>
        <Menu
          menuItemStyles={{
            button: () => {
              return {
                "&:hover": {
                  backgroundColor: "white",
                  color: "black !important",
                },
              };
            },
          }}
        >
          <MenuItem icon={<Home />}>Inicio</MenuItem>
          <MenuItem icon={<Groups />}>Clientes</MenuItem>
          <MenuItem icon={<LocationOn />}>Mapa de clientes</MenuItem>
          <MenuItem icon={<LocalShipping />}>
            Monitoreo de Distribuidores
          </MenuItem>
          <MenuItem icon={<PointOfSale />}>Ventas</MenuItem>
          <MenuItem icon={<RequestQuote />}>
            Pedidos{" "}
            <Chip
              label="1"
              color="secondary"
              sx={{ ml: "0.5rem", borderRadius: "8px" }}
            />
          </MenuItem>
          <MenuItem icon={<AddCard />}>Prestamos</MenuItem>
          <SubMenu label="Finanzas" icon={<TrendingUp />}>
            <MenuItem> Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </SubMenu>
          <SubMenu label="Reportes" icon={<DataSaverOff />}>
            <MenuItem> Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </SubMenu>
          <SubMenu label="Configuración" icon={<Settings />}>
            <MenuItem> Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div
        style={{
          width: "100%",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <AppBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
