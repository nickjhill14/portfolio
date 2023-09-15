import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Section } from "../../components/section/Section";
import { BasicInfo } from "../../domain/basicInfo";

function CreatePortfolioPage() {
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    name: "",
    role: "",
    email: "",
    phone: "",
    gitHub: "",
    linkedIn: "",
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          Create A Portfolio
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Section headingText="Add Basic Info">
          <TextField
            label="Name"
            variant="outlined"
            value={basicInfo.name}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, name: event.target.value })
            }
          />
          <TextField
            label="Role"
            variant="outlined"
            value={basicInfo.role}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, role: event.target.value })
            }
          />
          <TextField
            label="Email"
            variant="outlined"
            value={basicInfo.email}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, email: event.target.value })
            }
          />
          <TextField
            label="Phone"
            variant="outlined"
            value={basicInfo.phone}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, phone: event.target.value })
            }
          />
          <TextField
            label="GitHub"
            variant="outlined"
            value={basicInfo.gitHub}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, gitHub: event.target.value })
            }
          />
          <TextField
            label="LinkedIn"
            variant="outlined"
            value={basicInfo.linkedIn}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, linkedIn: event.target.value })
            }
          />
        </Section>
      </Grid>
      <Grid item xs={12} md={4}>
        <Section headingText="Preview">
          <pre>{JSON.stringify(basicInfo, null, 2)}</pre>
        </Section>
      </Grid>
    </Grid>
  );
}

export { CreatePortfolioPage };
