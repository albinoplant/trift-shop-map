import Map from "components/Map";
import MapLayout from "layouts/MapLayout";
import useGeo from "hooks/useGeo";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Storefront as StorefrontIcon } from "@mui/icons-material";
import { Collapse, Chip, Typography, Grid } from "@mui/material";
import { Fragment } from "react";

function Cockpit() {
  const { shops, selectedMarker, setSelectedMarker } = useGeo();
  const handleSelectItem = (id) => {
    setSelectedMarker({ id });
  };
  return (
    <MapLayout
      nav={shops.map((shop) => {
        const isItemSelected = selectedMarker.id === shop.id;
        const today = new Date().toLocaleString("en-us", { weekday: "long" });
        return (
          <Fragment key={shop.id}>
            <ListItem button onClick={() => handleSelectItem(shop.id)}>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary={shop.name} secondary={shop.address} />
            </ListItem>
            <Collapse in={isItemSelected}>
              <ListItem>
                <ListItemIcon />
                <Grid container spacing={1} mr={3}>
                  {shop.days.map((day, idx) => {
                    const isToday = day.name === today;
                    return (
                      <Fragment key={day.name + shop.id + idx}>
                        <Grid item xs={4}>
                          <Chip
                            color={isToday ? "secondary" : "default"}
                            size="small"
                            label={day.name}
                            key={day.name + idx}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={4} align="center">
                          <Typography
                            color={isToday ? "textPrimary" : "textSecondary"}
                            variant="body2"
                          >
                            {day?.price + " PLN"}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} align="center">
                          <Typography
                            color={isToday ? "textPrimary" : "textSecondary"}
                            variant="body2"
                          >
                            {day.hours}
                          </Typography>
                        </Grid>
                      </Fragment>
                    );
                  })}
                </Grid>
              </ListItem>
            </Collapse>
          </Fragment>
        );
      })}
    >
      <Map />
    </MapLayout>
  );
}

export default Cockpit;
