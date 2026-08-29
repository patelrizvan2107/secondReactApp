import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",

  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
function Grids(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        {/* Normal grids */}
        <Grid container spacing={2}>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>

        {/* grow and fit in remaining Space */}
        {/* <Grid container spacing={3}>
          <Grid size="grow">
            <Item>size=grow</Item>
          </Grid>
          <Grid size={1}>
            <Item>size=6</Item>
          </Grid>
          <Grid size="grow">
            <Item>size=grow</Item>
          </Grid>
        </Grid> */}

        {/* ofset on window size */}
        {/* <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
            <Item>1</Item>
          </Grid>
          <Grid size={{ xs: 4, md: 2 }} offset={{ md: "auto" }}>
            <Item>2</Item>
          </Grid>
          <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
            <Item>3</Item>
          </Grid>
          <Grid size={{ xs: "grow", md: 6 }} offset={{ md: 2 }}>
            <Item>4</Item>
          </Grid>
        </Grid> */}
        {/* Space between columns on window size */}
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Item>1</Item>
          </Grid>
          <Grid size={6}>
            <Item>2</Item>
          </Grid>
          <Grid size={6}>
            <Item>3</Item>
          </Grid>
          <Grid size={6}>
            <Item>4</Item>
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
}

export default Grids;
