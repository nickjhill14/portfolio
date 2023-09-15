import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { BasicInfo } from "../../domain/basicInfo";

function CreatePortfolioPage() {
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    name: "",
    role: "",
    email: "",
    phoneNumber: "",
    github: "",
    linkedIn: "",
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Create A Portfolio</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Add Basic Info</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={basicInfo.name}
          onChange={(event) =>
            setBasicInfo({ ...basicInfo, name: event.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Role"
          variant="outlined"
          value={basicInfo.role}
          onChange={(event) =>
            setBasicInfo({ ...basicInfo, role: event.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <pre>{JSON.stringify(basicInfo, null, 2)}</pre>
      </Grid>
    </Grid>
  );
}

export { CreatePortfolioPage };
