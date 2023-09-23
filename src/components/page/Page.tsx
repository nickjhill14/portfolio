import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import { Footer } from "../footer/Footer";

function Page({ children }: PropsWithChildren) {
  return (
    <Grid container minHeight="100vh" alignContent="space-between">
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <Grid container alignContent="end">
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Page };
