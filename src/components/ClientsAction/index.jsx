import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import PropTypes from "prop-types";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const CLIENTS = [
  {
    name: "Daniela Ayala",
    date: "20/ 01/ 2023",
    value: 100,
  },
  {
    name: "Rubén González",
    date: "20/ 01/ 2023",
    value: 100,
  },
  {
    name: "Mariana Reyes",
    date: "20/ 01/ 2023",
    value: 100,
  },
  {
    name: "Julio Espinoza",
    date: "20/ 01/ 2023",
    value: 100,
  },
];

const ClientsAction = () => {
  return (
    <Card variant="outlined" sx={{ px: 1 }}>
      <CardHeader
        title={
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <div>
              <Typography fontWeight={600}>
                Clientes{" "}
                <Typography variant="caption" ml="5px" color={"#828282"}>
                  Vista rapida
                </Typography>
              </Typography>
            </div>

            <IconButton>
              <SortIcon />
            </IconButton>
          </Stack>
        }
      />

      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
      >
        {CLIENTS.map((client) => (
          <Client key={client.name} {...client} />
        ))}
      </CardContent>
    </Card>
  );
};

function Client({ name, date, value }) {
  return (
    <Grid justifyContent={"space-between"} spacing={1} container>
      <Grid item xs={4} display={"flex"} alignItems={"center"}>
        <Avatar sx={{ width: 30, height: 30 }} />
        <Typography variant="caption" fontWeight={500} ml={"0.5rem"}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={7} display={"flex"} justifyContent={"flex-end"} gap={2}>
        <Chip label={date} color="primary" variant="outlined" />
        <Chip
          icon={<LocalAtmIcon />}
          label={`${value} Bs.`}
          color={"primary"}
          sx={{
            px: "0.5rem",
            "& .MuiChip-label": {
              fontWeight: "500",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

Client.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default ClientsAction;
