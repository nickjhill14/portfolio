import {
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { BasicInfo } from "../../domain/basicInfo";
import { ConfigPreview } from "../configPreview/ConfigPreview";
import { Section } from "../section/Section";

const defaultBasicInfo: BasicInfo = {
  name: "",
  role: "",
  email: "",
  gitHub: "",
  linkedIn: "",
};

function CreateBasicInfoSection() {
  const [basicInfo, setBasicInfo] = useState<BasicInfo>(defaultBasicInfo);
  const [enablePhone, setEnablePhone] = useState(false);

  const basicInfoPreview = JSON.stringify(basicInfo, null, 2);

  function togglePhone() {
    enablePhone && setBasicInfo({ ...basicInfo, phone: undefined });
    setEnablePhone(!enablePhone);
  }

  return (
    <Grid
      container
      spacing={2}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Grid item xs={12} md={8}>
        <Section headingText="Create Basic Info">
          <TextField
            label="Name"
            value={basicInfo.name}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, name: event.target.value })
            }
          />
          <TextField
            label="Role"
            value={basicInfo.role}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, role: event.target.value })
            }
          />
          <TextField
            label="Email"
            value={basicInfo.email}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, email: event.target.value })
            }
          />
          <TextField
            label="GitHub"
            value={basicInfo.gitHub}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, gitHub: event.target.value })
            }
          />
          <TextField
            label="LinkedIn"
            value={basicInfo.linkedIn}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, linkedIn: event.target.value })
            }
          />
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <TextField
              label="Phone"
              disabled={!enablePhone}
              value={basicInfo.phone ?? ""}
              onChange={(event) =>
                setBasicInfo({ ...basicInfo, phone: event.target.value })
              }
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox onClick={togglePhone} />}
              label={enablePhone ? "Disable" : "Enable"}
            />
          </Stack>
        </Section>
      </Grid>
      <Grid item xs={12} md={4}>
        <ConfigPreview json={basicInfoPreview} fileName="basic-info" />
      </Grid>
    </Grid>
  );
}

export { CreateBasicInfoSection, defaultBasicInfo };
