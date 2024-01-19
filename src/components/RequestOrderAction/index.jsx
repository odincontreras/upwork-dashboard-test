import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Button,
  Box,
  Grid,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import {
  RemoveCircleOutlineOutlined,
  AddCircleOutlineOutlined,
  Sort as SortIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RequestOrderAction = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

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
              <Typography fontWeight={600}>Realizar pedido</Typography>
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
        <TextField select label="Cliente" size="small">
          <MenuItem value={1}>Cliente 1</MenuItem>
          <MenuItem value={2}>Cliente 2</MenuItem>
          <MenuItem value={3}>Cliente 3</MenuItem>
        </TextField>

        <TextField select label="Litros del botellon" size="small">
          <MenuItem value={1}>Botellon de 5 Lts</MenuItem>
          <MenuItem value={2}>Botellon de 10 Lts</MenuItem>
          <MenuItem value={3}>Botellon de 20 Lts</MenuItem>
        </TextField>

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              border={"1px solid rgba(0, 0, 0, 0.12)"}
              borderRadius={"4px"}
              display={"flex"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={1}
            >
              <InputLabel>Cantidad</InputLabel>

              <Box display={"flex"} alignItems={"center"}>
                <IconButton onClick={decrementQuantity}>
                  <RemoveCircleOutlineOutlined />
                </IconButton>

                <StyledTextField
                  InputProps={{
                    style: { height: "20px", width: "50px", fontSize: "12px" },
                  }}
                  type="number"
                  onChange={handleQuantityChange}
                  value={quantity}
                />

                <IconButton onClick={incrementQuantity}>
                  <AddCircleOutlineOutlined />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <StyledTextField
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{
                      borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                      paddingLeft: "10px",
                      height: "100%",
                    }}
                    position="start"
                  >
                    Bs
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Stack direction={"row"} justifyContent={"end"}>
          <Button sx={{ width: "160px" }} variant="contained" color="secondary">
            Realizar pedido
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RequestOrderAction;
