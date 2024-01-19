import { Box, Card, Typography } from "@mui/material";
import ClientsAction from "../ClientsAction";
import RequestOrderAction from "../RequestOrderAction";

const FastActionsWrapper = () => {
  return (
    <>
      <Typography fontWeight={600} fontSize={18}>
        Acciones rápidas
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr 213px" gap={"1rem"}>
        <ClientsAction />

        <RequestOrderAction />

        <Card variant="outlined"></Card>
      </Box>
    </>
  );
};

export default FastActionsWrapper;
