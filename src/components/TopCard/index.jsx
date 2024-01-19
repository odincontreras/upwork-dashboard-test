import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TopCard = ({
  chipState = "success",
  title = "Title",
  value = 1,
  valueUnit,
  chipLabel = "+1%",
}) => {
  const chipBg = chipState === "success" ? "#D5FFD4" : "#FFD4D4";
  const chipTextColor = chipState === "success" ? "#0D970A" : "#A1140B";

  return (
    <Card variant="outlined" sx={{ minWidth: "214px" }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <Typography variant="body2" fontWeight={600} color={"#222222"}>
          {title}
        </Typography>

        <Typography variant="h4" color={"primary"} fontWeight={600}>
          {value}
          {valueUnit && (
            <Typography
              variant="h5"
              fontWeight={600}
              color={"primary"}
              component={"span"}
              ml={"0.5rem"}
            >
              {valueUnit}
            </Typography>
          )}
        </Typography>

        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Chip
            label={chipLabel}
            sx={{
              backgroundColor: chipBg,
              "& .MuiChip-label": {
                color: chipTextColor,
                fontSize: "12px",
              },
            }}
          />

          <Typography variant="caption" color={"#777777"}>
            En el último mes
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

TopCard.propTypes = {
  chipState: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  valueUnit: PropTypes.string,
  chipLabel: PropTypes.string.isRequired,
};

export default TopCard;
